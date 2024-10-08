import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Python", xp:1.5},
            {id: 2, value: "SQL", xp:1.5},
            {id: 3, value: "php", xp:1.2},
            {id: 4, value: "javascript", xp:1}
        ],
        frameworks: [
            {id: 1, value: "Django", xp:1.1},
            {id: 2, value: "Bootstrap", xp:1.1},
            {id: 3, value: "Symfony", xp:0.9},
            {id: 4, value: "React", xp:0.6}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;