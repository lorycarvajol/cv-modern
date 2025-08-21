import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="id">
                <div className="idContent">
                    <img src={process.env.PUBLIC_URL +"./media/moi2.png" } alt="pic" height="150px"/>
                    <h3>Lory Carvajol</h3>
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
                </div>
            </div>
        </div>
    );
};

export default Navigation;