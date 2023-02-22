import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import styles from '../DesktopLinks/DesktopLinks.module.scss'


const DesktopLinks = () => {
    const location = useLocation()
    const handleActiveLink = () => {
        console.log('location', location);
    }
    return (
        <ul className={`${styles.navLinks}`}>
            <li><NavLink onClick={handleActiveLink} className={styles.navLink} to="/">Home</NavLink></li>
            <li><NavLink onClick={handleActiveLink} className={styles.navLink} to="/team">Team</NavLink></li>
            <li><NavLink onClick={handleActiveLink} className={styles.navLink} to="/about">About the club</NavLink></li>
            <li><NavLink onClick={handleActiveLink} className={styles.navLink} to="/contact">Contact</NavLink></li>
        </ul>
    )
}

export default DesktopLinks