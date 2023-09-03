import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

function Footer() {
    
    return (
        <nav>
        <div className="footer-container">
            <div className="footer-left">SimplyNotes v0.2023.8b</div>
            <div className="navbar-center">
                <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                </a>
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </a>
                <a href="https://www.tu-portfolio.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCode} className="footer-icon" />
                </a>
            <div className="footer-rigth">by acamus79</div>
        </div>
        </div>
        </nav>
    );

}

export default Footer;
