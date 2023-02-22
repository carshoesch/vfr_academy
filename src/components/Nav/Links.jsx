import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.scss'

const Links = ({ handleCloseMenu }) => {
    return (
        <ul className={`${styles.navLinks} ${styles.zindex1}`}>
            <li><NavLink onClick={handleCloseMenu} className={styles.navLink} activeStyle={styles.selected} to="/">Home</NavLink></li>
            <li><NavLink onClick={handleCloseMenu} className={styles.navLink} activeStyle={styles.selected} to="/team">Team</NavLink></li>
            <li><NavLink onClick={handleCloseMenu} className={styles.navLink} activeStyle={styles.selected} to="/about">About the club</NavLink></li>
            <li><NavLink onClick={handleCloseMenu} className={styles.navLink} activeStyle={styles.selected} to="/contact">Contact</NavLink></li>
        </ul>
    )
}

export default Links