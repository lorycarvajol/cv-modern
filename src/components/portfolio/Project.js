import React, { Component } from 'react';

export default class Project extends Component {
    state = {
        showInfo:false
    }

    handleInfo = () => {
        this.props.onShowDetails(this.props.item);
    }

    

    render() {
        let {name, languagesIcons, picture, cadrage} = this.props.item;
        
        return (
            <div className="project">
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

