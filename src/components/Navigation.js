import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="id">
                <div className="idContent">
                    <img src={process.env.PUBLIC_URL +"./media/moi2.png" } alt="pic" height="150px"/>
                    {/* Deux span plutot qu'un <br> : le passage a la ligne est
                        pilote par le CSS. Sur le bandeau mobile, haut de 56px,
                        ils restent en ligne. L'espace explicite sert a ce cas —
                        sans lui, on lirait « LORYCARVAJOL ». */}
                    <h3>
                        <span>Lory</span>{' '}
                        <span>Carvajol</span>
                    </h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "navActive" : ""}>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences" className={({ isActive }) => isActive ? "navActive" : ""}>
                            <i className="fas fa-brain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "navActive" : ""}>
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "navActive" : ""}>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/lory-carvajol-71367513b/" target="_blank" 
                        rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lorycarvajol" target="_blank" 
                        rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>           
                    </li>
                </ul>
                <div className="signature">
                   <p>© Lory Carvajol </p>
                   {/* Ce bloc est masque sur mobile avec `.socialNetwork` :
                       les memes liens sont repris en bas de la page Contact,
                       qui reste accessible depuis la barre d'onglets. */}
                   <p className="liens-legaux">
                       <NavLink to="/mentions-legales">Mentions légales</NavLink>
                       <span aria-hidden="true"> · </span>
                       <NavLink to="/confidentialite">Confidentialité</NavLink>
                   </p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;