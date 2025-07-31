import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">
                <div className='image'></div>
                <div className='gradient'></div>
                </div>
                
                <div className="contactBox">
                    <h1>Me contacter</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Aix-les-Bains Savoie</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0677165526">
                                <span
                                    className="clickInput"
                                    onClick={() => {
                                        alert('Téléphone copié !');
                                    }}
                                >
                                    06-77-16-55-26
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <span
                                className="clickInput"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Ouvrir le client mail dans une nouvelle fenêtre/onglet
                                    window.open("mailto:lorycarvajolwebdev@gmail.com?subject=Contact%20Professionnel&body=Bonjour%20Lory,%0D%0A%0D%0AJe%20vous%20contacte%20suite%20à%20la%20consultation%20de%20votre%20CV%20en%20ligne.%0D%0A%0D%0ACordialement", '_blank');
                                    alert('Client mail ouvert !');
                                }}
                            >
                                lorycarvajolwebdev@gmail.com
                            </span>
                        </li>
                    </ul>
                    
                </div>
                
                <div className="socialNetwork">
                    <ul>
                        <a
                            href="https://www.linkedin.com/in/lory-carvajol-71367513b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/lorycarvajol"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
