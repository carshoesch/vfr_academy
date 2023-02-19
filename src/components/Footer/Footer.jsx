import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p>Verein für Rasenspiele 1906 e.V.</p>
            <p>Gustav-Brandt-Straße 82</p>
            <p>30173 Hannover</p>
            <p>Telefon: 0511-816341</p>
            <p>Email: info@vfr06.de</p>
            <p>
                <a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a>
            </p>
            <p>© 2020 | Verein für Rasenspiele von 1906 e. V.</p>
        </footer>
    )
}

export default Footer