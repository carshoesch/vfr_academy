import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import styles from '../DesktopLinks/DesktopLinks.module.scss'


const DesktopLinks = () => {
    const location = useLocation()
    const handleActiveLink = () => {
        // console.log('location', location);
        // switch (location) {
        //     case '/':
        //         location === 
        // }
    }
    return (
        <ul className={`${styles.navLinks}`}>
            <li><NavLink onClick={handleActiveLink}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
                }} to="/">Home</NavLink>
            </li>
            <li><NavLink onClick={handleActiveLink}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
                }} to="/team">Team</NavLink>
            </li>
            <li><NavLink onClick={handleActiveLink}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
                }} to="/about">About</NavLink>
            </li>
            <li><NavLink onClick={handleActiveLink}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
                }} to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}

export default DesktopLinks