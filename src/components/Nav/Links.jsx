import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Nav.module.scss'

const Links = ({ handleCloseMenu }) => {
    return (
        <ul className={`${styles.navLinks} ${styles.zindex1}`}>
            <li><Link onClick={handleCloseMenu} className={styles.navLink} to="/">Home</Link></li>
            <li><Link onClick={handleCloseMenu} className={styles.navLink} to="/team">Team</Link></li>
            <li><Link onClick={handleCloseMenu} className={styles.navLink} to="/about">About the club</Link></li>
            <li><Link onClick={handleCloseMenu} className={styles.navLink} to="/contact">Contact</Link></li>
        </ul>
    )
}

export default Links