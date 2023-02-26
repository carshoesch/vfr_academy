import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.scss'

const Links = ({ handleCloseMenu }) => {
    return (
        <ul className={`${styles.navLinks}`}>
            <li><NavLink
                onClick={handleCloseMenu}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/">Home</NavLink>
            </li>
            <li><NavLink
                onClick={handleCloseMenu}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/team">Team</NavLink>
            </li>
            <li><NavLink
                onClick={handleCloseMenu}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/about">About</NavLink>
            </li>
            <li><NavLink
                onClick={handleCloseMenu}
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}

export default Links