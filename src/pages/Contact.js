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
                            <a
                                className="clickInput"
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=lorycarvajolwebdev@gmail.com&su=${encodeURIComponent('Contact Professionnel')}&body=${encodeURIComponent('Bonjour Lory,\r\n\r\nJe vous contacte suite à la consultation de votre CV en ligne.\r\n\r\nCordialement')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                lorycarvajolwebdev@gmail.com
                            </a>
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
