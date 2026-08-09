import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

// ---------------------------------------------------------------------------
// TEXTE A RELIRE
//
// Ce recit t'appartient : je n'ai fait que mettre en forme ce que tu m'as
// dicte, sans rien ajouter ni interpreter. Relis-le et corrige librement — le
// ton, le niveau de detail, ce que tu gardes ou retires.
//
// Trois choix que j'ai faits, et que tu peux defaire :
//   - premiere personne, phrases courtes, aucun registre dramatique ;
//   - le dernier paragraphe explique POURQUOI cette page existe, ce qui evite
//     qu'elle soit lue comme un appel a la compassion ;
//   - aucun detail que tu ne m'as pas donne, et personne n'est nomme : le
//     condamne ne l'est ni par son nom, ni par un element qui l'identifierait.
//     C'est ce qui distingue un recit personnel d'une mise en cause publique.
// ---------------------------------------------------------------------------

const Interruption = () => (
    <div className="recit">
        <Navigation />
        <div className="legalContent">
            <article>
                <p className="periode-titre">2014 — 2020</p>
                <h1>Six années que le CV ne raconte pas</h1>

                <section>
                    <p className="chapeau">
                        Entre mon poste de monteur-câbleur chez Alstom-Areva et ma formation de
                        développeur, il y a un intervalle de six ans. Voici ce qu'il contient.
                    </p>
                </section>

                <section>
                    <h2>L'agression</h2>
                    <p>
                        C'était en 2014, pendant mes congés d'été, alors que j'étais rentré près
                        de ma famille. En pleine rue passante, à dix-huit heures, devant de
                        nombreux témoins. Une agression gratuite, dont les raisons n'ont jamais
                        été établies — pas même à l'issue du procès.
                    </p>
                    <p>
                        Elle m'a laissé environ un mois et demi dans le coma, et des séquelles
                        irréversibles.
                    </p>
                    <p>
                        Ouverte pour rixe, l'affaire a été requalifiée en tentative de meurtre et
                        jugée devant la cour d'assises de Chambéry. L'auteur des coups a été
                        condamné à trois ans ferme ; son complice à une peine avec sursis, pour
                        avoir coopéré.
                    </p>
                </section>

                <section>
                    <h2>La convalescence</h2>
                    <p>
                        Près de six années ont suivi, dont environ trois en confinement quasi
                        total, avec une assistance à domicile. Pendant cette période, mon
                        ordinateur a été ma seule fenêtre sur le monde.
                    </p>
                </section>

                <section>
                    <h2>La reconversion</h2>
                    <p>
                        Quand j'ai voulu reprendre mon ancien métier, mon état ne le permettait
                        plus. C'est de là qu'est venue la reconversion vers l'informatique : le
                        seul domaine que je pouvais aborder depuis chez moi, avec l'outil que
                        j'avais déjà sous la main.
                    </p>
                    <p>
                        J'ai suivi la formation Développeur Web et Web Mobile, et obtenu le
                        diplôme en pleine période Covid. Deux ans plus tard, je formais à mon tour.
                    </p>
                </section>

                <section>
                    <h2>Pourquoi cette page</h2>
                    <p>
                        Un intervalle de six ans dans un parcours appelle une explication, et je
                        préfère la donner moi-même plutôt que de la laisser deviner. Ce n'est pas
                        un appel à la compassion : c'est le contexte d'une reconversion, et
                        l'origine d'une certaine ténacité.
                    </p>
                    <p className="aparte">
                        Et non, je n'ai pas passé ces six années à surfer à Hawaï. D'abord parce
                        que la pizza à l'ananas est une hérésie sans nom, et qu'on ne s'installe
                        pas chez des gens qui l'assument. Ensuite parce que je surfe très mal.
                        Les priorités sont ce qu'elles sont.
                    </p>
                    <p className="retour">
                        <Link to="/competences">← Retour à mon parcours professionnel</Link>
                    </p>
                </section>
            </article>
        </div>
    </div>
);

export default Interruption;
