import React from 'react';

const ProgressBar = (props) => {
    
    return (
        <div className={props.className}>
            <h4>{props.title}</h4>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1 an</span>
                <span>2 Ans</span>
                <span>3 Ans </span>
                <span>4 Ans </span>
                <span>5 Ans </span>
            </div>

            <div>
                {
                    props.languages.map((item) =>{
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;