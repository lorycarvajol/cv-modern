import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import FullPageModal from '../components/common/FullPageModal';

// ---------------------------------------------------------------------------
// TEXTES A VALIDER
//
// Ces affirmations te concernent et sont publiques : je ne pouvais pas les
// inventer. Elles sont regroupees ici, corrige-les librement.
// ---------------------------------------------------------------------------
const INFOS = {
    disponibilite: 'Disponible pour de nouvelles missions',
    zone: 'Aix-les-Bains, Savoie',
    mobilite: 'À distance ou sur site',
};

const SUJETS = ['Formation', 'Développement', 'Data & consulting', 'Autre sujet'];

const EMAIL = 'lorycarvajolwebdev@gmail.com';
const TEL_AFFICHE = '06 77 16 55 26';
const TEL_LIEN = '+33677165526';

const CHAMPS_VIDES = { name: '', email: '', subject: SUJETS[0], message: '', website: '' };

const Contact = () => {
    const [ouvert, setOuvert] = useState(false);
    const [champs, setChamps] = useState(CHAMPS_VIDES);
    const [etat, setEtat] = useState('idle'); // idle | envoi | envoye | erreur
    const [erreur, setErreur] = useState('');

    const majChamp = (e) => {
        const { name, value } = e.target;
        setChamps((prev) => ({ ...prev, [name]: value }));
    };

    const fermer = () => {
        setOuvert(false);
        // Remet la modale a zero pour la prochaine ouverture, sans effacer
        // immediatement le message de confirmation sous les yeux du visiteur.
        setTimeout(() => setEtat('idle'), 300);
    };

    const envoyer = async (e) => {
        e.preventDefault();
        setEtat('envoi');
        setErreur('');

        try {
            const reponse = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(champs),
            });

            // Une reponse HTML en 200 signifie qu'on a atterri sur le site au
            // lieu de l'API (route mal configuree). Sans ce controle, on
            // annoncerait un envoi reussi alors que rien n'est parti.
            const typeContenu = reponse.headers.get('content-type') || '';
            if (!typeContenu.includes('application/json')) {
                throw new Error("Le service d'envoi est injoignable. Écrivez-moi directement par e-mail.");
            }

            if (!reponse.ok) {
                const data = await reponse.json().catch(() => ({}));
                // `detail` n'est une chaine que pour nos propres erreurs (429,
                // 502, 503). Sur une erreur de validation, FastAPI renvoie un
                // tableau d'objets : l'afficher tel quel donnerait
                // « [object Object] » au visiteur.
                throw new Error(
                    typeof data.detail === 'string'
                        ? data.detail
                        : 'Un des champs est invalide. Vérifiez votre saisie.'
                );
            }

            setEtat('envoye');
            setChamps(CHAMPS_VIDES);
        } catch (err) {
            setEtat('erreur');
            setErreur(
                err.message === 'Failed to fetch'
                    ? "Le service d'envoi est injoignable. Écrivez-moi directement par e-mail."
                    : err.message
            );
        }
    };

    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="gradient"></div>
                </div>

                <div className="contact-corps">
                    <h1>Me contacter</h1>
                    <p className="baseline">
                        Un projet, une formation à monter, ou simplement une question&nbsp;?
                    </p>

                    <span className="statut-dispo">
                        <i className="fas fa-circle" aria-hidden="true"></i>
                        {INFOS.disponibilite}
                    </span>

                    <button type="button" className="cta-message" onClick={() => setOuvert(true)}>
                        <i className="fas fa-paper-plane" aria-hidden="true"></i>
                        Écrire un message
                    </button>

                    <ul className="coordonnees">
                        <li>
                            <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                            <a href={`tel:${TEL_LIEN}`}>{TEL_AFFICHE}</a>
                        </li>
                        <li>
                            <i className="far fa-envelope" aria-hidden="true"></i>
                            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('Contact professionnel')}`}>
                                {EMAIL}
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            <span>
                                {INFOS.zone} <em>— {INFOS.mobilite}</em>
                            </span>
                        </li>
                    </ul>

                    <div className="liens-secondaires">
                        <a
                            href="https://www.linkedin.com/in/lory-carvajol-71367513b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                            Linkedin
                        </a>
                        <a
                            href="https://github.com/lorycarvajol"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" aria-hidden="true"></i>
                            Github
                        </a>
                        <a
                            href={`${process.env.PUBLIC_URL}/media/CV_carvajol_lory_24-02-26.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-file-alt" aria-hidden="true"></i>
                            Mon CV
                        </a>
                    </div>
                </div>
            </div>

            <FullPageModal
                show={ouvert}
                onClose={fermer}
                title="Écrire un message"
                moduleType="Contact"
                variant="compact"
            >
                <form className="formulaire-contact" onSubmit={envoyer}>
                    <div className="champ">
                        <label htmlFor="name">Votre nom</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            minLength={2}
                            autoComplete="name"
                            value={champs.name}
                            onChange={majChamp}
                        />
                    </div>

                    <div className="champ">
                        <label htmlFor="email">Votre e-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={champs.email}
                            onChange={majChamp}
                        />
                    </div>

                    <div className="champ">
                        <label htmlFor="subject">Sujet</label>
                        <select id="subject" name="subject" value={champs.subject} onChange={majChamp}>
                            {SUJETS.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div className="champ">
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            minLength={10}
                            value={champs.message}
                            onChange={majChamp}
                        ></textarea>
                    </div>

                    {/* Champ piege : hors de l'ecran et du parcours clavier,
                        seuls les robots le remplissent. Le serveur rejette s'il est rempli. */}
                    <div className="pot-de-miel" aria-hidden="true">
                        <label htmlFor="website">Ne pas remplir</label>
                        <input
                            id="website"
                            name="website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={champs.website}
                            onChange={majChamp}
                        />
                    </div>

                    <button type="submit" className="envoyer" disabled={etat === 'envoi'}>
                        {etat === 'envoi' ? (
                            <>
                                <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
                                Envoi en cours…
                            </>
                        ) : (
                            <>
                                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                                Envoyer
                            </>
                        )}
                    </button>

                    {/* aria-live : le retour est annonce aux lecteurs d'ecran,
                        qui ne verraient pas le changement visuel. */}
                    <p className={`retour retour--${etat}`} role="status" aria-live="polite">
                        {etat === 'envoye' && 'Message envoyé. Je vous réponds au plus vite.'}
                        {etat === 'erreur' && erreur}
                    </p>
                </form>
            </FullPageModal>
        </div>
    );
};

export default Contact;
