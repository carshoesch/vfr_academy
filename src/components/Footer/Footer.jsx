import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p>Verein für Rasenspiele 1906 e.V.</p>
            <p>Gustav-Brandt-Straße 82</p>
            <p>30173 Hannover</p>
            <p>Telefon: 0511-816341</p>
            <p>Email: info@vfr06.de</p>
            <p>
                <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link>
            </p>
            <p>© 2020 | Verein für Rasenspiele von 1906 e. V.</p>
        </footer>
    )
}

export default Footer