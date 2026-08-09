"""
Micro-service du site : formulaire de contact et chatbot.

Sa raison d'etre est la meme pour les deux : detenir des cles API. La cle
Resend autorise l'envoi d'e-mails au nom du domaine, la cle Anthropic autorise
des appels factures — ni l'une ni l'autre ne peut vivre dans le bundle React,
qui part en clair dans le navigateur.

Deux routes : POST /api/contact et POST /api/chat.
"""

import json
import os
import time
import logging
from collections import deque
from typing import Deque, Dict, Tuple

import httpx
from anthropic import APIConnectionError, APIStatusError
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, EmailStr, Field

from chat import RequeteChat, chat_disponible, repondre, _budget_epuise

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("cv-mailer")

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
MAIL_FROM = os.environ.get("MAIL_FROM", "contact@lorycarvajol.dev")
MAIL_TO = os.environ.get("MAIL_TO", "lorycarvajolwebdev@gmail.com")

# Fenetre glissante par IP. Les endpoints sont publics : sans cela, un script
# peut vider le quota Resend (100 envois/jour) en quelques secondes.
RATE_LIMIT_MAX = int(os.environ.get("RATE_LIMIT_MAX", "3"))
RATE_LIMIT_WINDOW_S = int(os.environ.get("RATE_LIMIT_WINDOW_S", "3600"))

# Le chat a son propre quota : une conversation, c'est plusieurs requetes, la
# limite du formulaire (3/h) la rendrait inutilisable.
CHAT_RATE_LIMIT_MAX = int(os.environ.get("CHAT_RATE_LIMIT_MAX", "30"))

# Cle : (nom du seau, IP). Deux compteurs independants sur la meme IP.
_hits: Dict[Tuple[str, str], Deque[float]] = {}

app = FastAPI(title="cv-mailer", docs_url=None, redoc_url=None)


class ContactMessage(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(min_length=2, max_length=150)
    message: str = Field(min_length=10, max_length=5000)
    # Champ piege : invisible a l'ecran, seuls les robots le remplissent.
    website: str = Field(default="", max_length=0)


def _client_ip(request: Request) -> str:
    # Traefik place l'IP reelle ici ; sans proxy on retombe sur l'IP directe.
    forwarded = request.headers.get("x-forwarded-for", "")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _rate_limited(ip: str, seau: str = "contact", maximum: int = RATE_LIMIT_MAX) -> bool:
    now = time.time()
    hits = _hits.setdefault((seau, ip), deque())
    while hits and now - hits[0] > RATE_LIMIT_WINDOW_S:
        hits.popleft()
    if len(hits) >= maximum:
        return True
    hits.append(now)
    return False


@app.get("/api/health")
def health() -> dict:
    return {
        "status": "ok",
        "configured": bool(RESEND_API_KEY),
        "chat": chat_disponible(),
    }


@app.post("/api/chat")
async def chat(payload: RequeteChat, request: Request):
    """Reponse du chatbot, diffusee au fil de l'eau.

    Le format de sortie est du SSE (`text/event-stream`) : le navigateur affiche
    les mots au fur et a mesure au lieu d'attendre la reponse complete. On ne
    peut pas utiliser `EventSource` cote client — il ne sait pas faire de POST —
    donc le front lit le flux via `fetch`.
    """
    if not chat_disponible():
        raise HTTPException(status_code=503, detail="Le chat est indisponible.")

    if _budget_epuise():
        # Le coupe-circuit quotidien a saute. On le dit franchement plutot que
        # de renvoyer une erreur technique : le visiteur a une porte de sortie.
        logger.warning("Budget de chat quotidien atteint")
        raise HTTPException(
            status_code=429,
            detail="Le chat a atteint sa limite du jour. Ecrivez-moi par e-mail.",
        )

    ip = _client_ip(request)
    if _rate_limited(ip, seau="chat", maximum=CHAT_RATE_LIMIT_MAX):
        raise HTTPException(
            status_code=429,
            detail="Trop de messages. Reessayez dans un moment.",
        )

    async def flux():
        try:
            async for fragment in repondre(payload.messages):
                # `json.dumps` plutot que le texte brut : un fragment peut
                # contenir un saut de ligne, qui terminerait l'evenement SSE.
                yield f"data: {json.dumps({'texte': fragment})}\n\n"
        except ValueError as exc:
            yield f"data: {json.dumps({'erreur': str(exc)})}\n\n"
        except (APIStatusError, APIConnectionError) as exc:
            # Le detail peut contenir des elements de configuration : journalise,
            # mais ne renvoie rien de tout cela au visiteur.
            logger.error("Anthropic a echoue : %s", exc)
            yield f"data: {json.dumps({'erreur': 'Reponse impossible pour le moment.'})}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        flux(),
        media_type="text/event-stream",
        # Sans cela, un proxy tamponne la reponse et le streaming ne sert a rien.
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@app.post("/api/contact")
async def contact(payload: ContactMessage, request: Request) -> dict:
    if not RESEND_API_KEY:
        logger.error("RESEND_API_KEY absente : envoi impossible")
        raise HTTPException(status_code=503, detail="Service d'envoi indisponible")

    ip = _client_ip(request)
    if _rate_limited(ip):
        raise HTTPException(
            status_code=429,
            detail="Trop de messages envoyes. Reessayez dans un moment.",
        )

    body = (
        f"Nom     : {payload.name}\n"
        f"E-mail  : {payload.email}\n"
        f"Sujet   : {payload.subject}\n"
        f"\n{payload.message}\n"
    )

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.post(
                "https://api.resend.com/emails",
                headers={"Authorization": f"Bearer {RESEND_API_KEY}"},
                json={
                    "from": f"Site lorycarvajol.dev <{MAIL_FROM}>",
                    "to": [MAIL_TO],
                    # Permet de repondre directement au visiteur.
                    "reply_to": payload.email,
                    "subject": f"[Site] {payload.subject}",
                    "text": body,
                },
            )
    except httpx.RequestError as exc:
        logger.error("Resend injoignable : %s", exc)
        raise HTTPException(status_code=502, detail="Envoi impossible pour le moment")

    if response.status_code >= 400:
        # Le corps peut contenir des details de configuration : journalise,
        # mais ne renvoie rien de tout cela au visiteur.
        logger.error("Resend a repondu %s : %s", response.status_code, response.text)
        raise HTTPException(status_code=502, detail="Envoi impossible pour le moment")

    logger.info("Message transmis depuis %s", payload.email)
    return {"status": "sent"}
