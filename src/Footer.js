import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>

                <div className="column-3">
                    <h2>Adresse</h2>
                    <p>Rue Gutenberg 18</p>
                    <p>1800 Vevey</p>
                </div>
                <div className="column-3">
                <h2>Contact</h2>
                    <p>+41 78 724 46 17</p>
                    <p>info@webmole.ch</p>
                </div>
                <div className="column-3">
                <h2>Suivez-moi</h2>
                <a href="/"><FontAwesomeIcon icon={faInstagram} className="footer-icon"/></a>
                <a href="/"><FontAwesomeIcon icon={faFacebook} className="footer-icon"/></a>                
                </div>

        </footer>
    )
}

export default Footer;