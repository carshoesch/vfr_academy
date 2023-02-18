import React from 'react'
import styles from './Nav.module.scss'

const Links = ({ openMenu }) => {
    // TODO: pages need to be rendered or at least props need to be created in this component
    const handleGoToPage = (path) => {
        console.log('path', path);
    }
    return (
        <ul className={`${styles.navLinks} ${styles.zindex1}`}>
            <li><a onClick={() => handleGoToPage('home')} className={styles.navLink} href="#">Home</a></li>
            <li><a onClick={() => handleGoToPage('team')} className={styles.navLink} href="#team">Team</a></li>
            <li><a onClick={() => handleGoToPage('about')} className={styles.navLink} href="#about">About the club</a></li>
            <li><a onClick={() => handleGoToPage('contact')} className={styles.navLink} href="#contact">Contact</a></li>
        </ul>
    )
}

export default Links