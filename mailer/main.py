"""
Micro-service d'envoi du formulaire de contact.

Sa seule raison d'etre : detenir la cle Resend. Celle-ci autorise l'envoi
d'e-mails au nom du domaine, elle ne peut donc pas vivre dans le bundle React,
qui part en clair dans le navigateur.

Une seule route, POST /api/contact.
"""

import os
import time
import logging
from collections import deque
from typing import Deque, Dict

import httpx
from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel, EmailStr, Field

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("cv-mailer")

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
MAIL_FROM = os.environ.get("MAIL_FROM", "contact@lorycarvajol.dev")
MAIL_TO = os.environ.get("MAIL_TO", "lorycarvajolwebdev@gmail.com")

# Fenetre glissante par IP. L'endpoint est public : sans cela, un script peut
# vider le quota Resend (100 envois/jour) en quelques secondes.
RATE_LIMIT_MAX = int(os.environ.get("RATE_LIMIT_MAX", "3"))
RATE_LIMIT_WINDOW_S = int(os.environ.get("RATE_LIMIT_WINDOW_S", "3600"))
_hits: Dict[str, Deque[float]] = {}

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


def _rate_limited(ip: str) -> bool:
    now = time.time()
    hits = _hits.setdefault(ip, deque())
    while hits and now - hits[0] > RATE_LIMIT_WINDOW_S:
        hits.popleft()
    if len(hits) >= RATE_LIMIT_MAX:
        return True
    hits.append(now)
    return False


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok", "configured": bool(RESEND_API_KEY)}


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
