import React from 'react';
import Navigation from '../components/Navigation';
import { EDITEUR, SOUS_TRAITANTS, DERNIERE_MAJ } from '../data/legal';
import { EMAIL, lienMail } from '../data/contactInfo';

const Confidentialite = () => (
    <div className="legal">
        <Navigation />
        <div className="legalContent">
            <article>
                <h1>Politique de confidentialité</h1>
                <p className="maj">Dernière mise à jour : {DERNIERE_MAJ}</p>

                <section>
                    <h2>Responsable du traitement</h2>
                    <p>
                        {EDITEUR.nom}, éditeur de ce site. Pour toute question relative à vos
                        données, écrivez à{' '}
                        <a href={lienMail('Données personnelles')}>{EMAIL}</a>
                        .
                    </p>
                </section>

                <section>
                    <h2>Ce qui est collecté, et pourquoi</h2>

                    <h3>Formulaire de contact</h3>
                    <p>
                        Nom, adresse e-mail, sujet et contenu du message. Ces données servent
                        uniquement à vous répondre. Base légale : votre démarche volontaire de
                        prise de contact.
                    </p>

                    <h3>Assistant conversationnel</h3>
                    <p>
                        Le contenu des messages que vous adressez à l’assistant est transmis à
                        un service d’intelligence artificielle pour générer la réponse. Les
                        conversations <strong>ne sont pas enregistrées</strong> sur ce site :
                        seuls des compteurs techniques anonymes (nombre de mots traités) sont
                        journalisés, afin de surveiller les coûts.
                    </p>
                    <p>
                        N’y saisissez pas d’informations sensibles ou confidentielles : pour
                        cela, le formulaire de contact ou l’e-mail direct sont préférables.
                    </p>

                    <h3>Journaux techniques</h3>
                    <p>
                        Comme tout serveur web, celui-ci enregistre l’adresse IP des requêtes.
                        Elle sert à limiter les envois abusifs (formulaire et assistant) et à la
                        sécurité du service. Elle n’est associée à aucun profil.
                    </p>
                </section>

                <section>
                    <h2>Ce qui n’est pas collecté</h2>
                    <ul className="liste-nette">
                        <li>Aucun cookie n’est déposé sur votre appareil.</li>
                        <li>Aucun outil de mesure d’audience, aucun traceur publicitaire.</li>
                        <li>Aucune revente ni partage de données à des fins commerciales.</li>
                        <li>Aucun compte, aucun profil, aucun historique de navigation.</li>
                    </ul>
                    <p>
                        C’est pourquoi ce site n’affiche pas de bandeau de consentement : il
                        n’aurait rien à vous faire accepter.
                    </p>
                </section>

                <section>
                    <h2>Destinataires</h2>
                    <p>
                        Vos données ne sont transmises qu’aux prestataires strictement
                        nécessaires au fonctionnement du site :
                    </p>
                    <table className="tableau-legal">
                        <thead>
                            <tr>
                                <th>Prestataire</th>
                                <th>Rôle</th>
                                <th>Données concernées</th>
                                <th>Hébergement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SOUS_TRAITANTS.map((s) => (
                                <tr key={s.nom}>
                                    <td>{s.nom}</td>
                                    <td>{s.role}</td>
                                    <td>{s.donnees}</td>
                                    <td>
                                        {s.zone}
                                        {s.horsUE && <span className="hors-ue"> — hors UE</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>
                        <strong>Transfert hors Union européenne.</strong> Les messages adressés à
                        l’assistant conversationnel sont traités aux États-Unis par Anthropic.
                        Si vous ne souhaitez pas que vos données quittent l’Union européenne,
                        n’utilisez pas l’assistant : le formulaire de contact et l’e-mail
                        restent à votre disposition.
                    </p>
                    <p>
                        Le site lui-même est hébergé en France, chez OVH.
                    </p>
                </section>

                <section>
                    <h2>Durée de conservation</h2>
                    <p>
                        Les messages reçus par e-mail sont conservés le temps nécessaire à
                        l’échange, puis au maximum trois ans après le dernier contact. Les
                        journaux techniques sont conservés au maximum douze mois. Les
                        conversations avec l’assistant ne sont pas conservées.
                    </p>
                </section>

                <section>
                    <h2>Vos droits</h2>
                    <p>
                        Vous disposez d’un droit d’accès, de rectification, d’effacement, de
                        limitation et d’opposition sur vos données. Pour l’exercer, écrivez à{' '}
                        <a href={lienMail('Exercice de mes droits RGPD')}>{EMAIL}</a>
                        . Une réponse vous sera apportée sous un mois.
                    </p>
                    <p>
                        Si la réponse ne vous satisfait pas, vous pouvez saisir la CNIL :{' '}
                        <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
                            cnil.fr/fr/plaintes
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2>Ressources externes</h2>
                    <p>
                        Certaines polices de caractères et icônes sont chargées depuis des
                        serveurs tiers (Google Fonts, Font Awesome), ce qui leur transmet votre
                        adresse IP au moment de l’affichage. Ces ressources sont en cours
                        d’internalisation afin de supprimer ce transfert.
                    </p>
                </section>

                <section>
                    <h2>Mentions légales</h2>
                    <p>
                        L’identité de l’éditeur et de l’hébergeur figure dans les{' '}
                        <a href="/mentions-legales">mentions légales</a>.
                    </p>
                </section>
            </article>
        </div>
    </div>
);

export default Confidentialite;
