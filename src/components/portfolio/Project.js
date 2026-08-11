import React, { Component } from 'react';

export default class Project extends Component {
    state = {
        showInfo:false
    }

    handleInfo = () => {
        this.props.onShowDetails(this.props.item);
    }

    

    render() {
        let {name, languagesIcons, picture, cadrage, shortInfo} = this.props.item;

        return (
            /* `project--avec-resume` ajoute la rangee de grille du resume. Sans
               cette classe, le `1fr` de `.project` echoit au paragraphe et la
               capture bascule dans une rangee implicite. */
            <div className={`project${shortInfo ? ' project--avec-resume' : ''}`}>
                <button className="project-details-btn" onClick={this.handleInfo}>
                    <i className="fas fa-info-circle"></i>
                    Détails
                </button>

                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>

                <h3>{name}</h3>

                {/* Champ optionnel : les projets sans `shortInfo` gardent une
                    carte a trois rangees, inchangee. */}
                {shortInfo && <p className="project-resume">{shortInfo}</p>}

                <div className="project-image">
                    {/* `cadrage` (optionnel, defini dans portfolioData.js) choisit
                        la partie conservee au rognage. Le cadre de la carte est
                        bien plus large que haut (4.18 contre 2.25 pour les
                        captures) : `cover` rogne donc en haut et en bas, et le
                        centrage par defaut coupe l'en-tete de l'interface, qui
                        est justement ce qui identifie l'application. */}
                    <img
                        src={picture}
                        alt={name}
                        style={cadrage ? { objectPosition: cadrage } : undefined}
                    />
                </div>

            </div>
        );
    }
}

