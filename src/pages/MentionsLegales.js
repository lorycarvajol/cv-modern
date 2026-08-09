import React from 'react';
import Navigation from '../components/Navigation';
import { EDITEUR, HEBERGEUR, DERNIERE_MAJ } from '../data/legal';
import { EMAIL, lienMail } from '../data/contactInfo';

// Affiche la valeur, ou un encadre « à compléter » si elle vaut encore `null`.
// Volontairement voyant : une mention legale incomplete mise en ligne est une
// infraction, pas un detail cosmetique.
const Champ = ({ valeur, quoi }) =>
    valeur ? <span>{valeur}</span> : <em className="a-completer">à compléter — {quoi}</em>;

const MentionsLegales = () => (
    <div className="legal">
        <Navigation />
        <div className="legalContent">
            <article>
                <h1>Mentions légales</h1>
                <p className="maj">Dernière mise à jour : {DERNIERE_MAJ}</p>

                <section>
                    <h2>Éditeur du site</h2>
                    <dl>
                        <dt>Nom</dt>
                        <dd>{EDITEUR.nom}</dd>

                        <dt>Statut</dt>
                        <dd><Champ valeur={EDITEUR.statut} quoi="forme juridique" /></dd>

                        <dt>Adresse</dt>
                        <dd><Champ valeur={EDITEUR.adresse} quoi="adresse de l’établissement" /></dd>

                        <dt>Courriel</dt>
                        <dd>
                            <a href={lienMail('Contact via les mentions légales')} target="_blank" rel="noopener noreferrer">
                                {EMAIL}
                            </a>
                        </dd>

                        <dt>SIRET</dt>
                        <dd><Champ valeur={EDITEUR.siret} quoi="numéro à 14 chiffres" /></dd>

                        <dt>RCS / RM</dt>
                        <dd>
                            {EDITEUR.rcsOuRm || (
                                <em className="a-completer">
                                    à compléter — ville et numéro d’immatriculation, ou « non applicable »
                                </em>
                            )}
                        </dd>

                        <dt>TVA</dt>
                        <dd>
                            <Champ
                                valeur={EDITEUR.tva}
                                quoi="numéro intracommunautaire, ou mention de franchise (art. 293 B du CGI)"
                            />
                        </dd>
                    </dl>
                </section>

                <section>
                    <h2>Directeur de la publication</h2>
                    <p>{EDITEUR.nom}</p>
                </section>

                <section>
                    <h2>Hébergement</h2>
                    <p>
                        Le site est hébergé par <strong>{HEBERGEUR.nom}</strong>,{' '}
                        {HEBERGEUR.adresse} — {HEBERGEUR.telephone} —{' '}
                        <a href={HEBERGEUR.site} target="_blank" rel="noopener noreferrer">
                            {HEBERGEUR.site.replace('https://', '')}
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2>Propriété intellectuelle</h2>
                    <p>
                        Les textes, la charte graphique et le code de ce site sont l’œuvre de{' '}
                        {EDITEUR.nom}, sauf mention contraire. Les captures d’écran des projets
                        présentés dans le portfolio restent la propriété de leurs auteurs
                        respectifs, et ne sont reproduites qu’à titre d’illustration du travail
                        réalisé.
                    </p>
                    <p>
                        Toute reproduction ou représentation, totale ou partielle, sans
                        autorisation écrite préalable, est interdite.
                    </p>
                </section>

                <section>
                    <h2>Données personnelles</h2>
                    <p>
                        Le traitement des données collectées par le formulaire de contact et par
                        l’assistant conversationnel est décrit dans la{' '}
                        <a href="/confidentialite">politique de confidentialité</a>.
                    </p>
                </section>
            </article>
        </div>
    </div>
);

export default MentionsLegales;
