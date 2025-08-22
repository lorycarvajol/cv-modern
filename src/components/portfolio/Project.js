import React, { Component } from 'react';

export default class Project extends Component {
    state = {
        showInfo:false
    }

    handleInfo = () => {
        this.props.onShowDetails(this.props.item);
    }

    

    render() {
        let {name, languagesIcons, picture} = this.props.item;
        
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
                    <img src={picture} alt={name} />
                </div>

            </div>
        );
    }
}

