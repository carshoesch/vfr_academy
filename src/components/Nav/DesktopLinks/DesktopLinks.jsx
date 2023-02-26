import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../DesktopLinks/DesktopLinks.module.scss'


const DesktopLinks = () => {
    return (
        <ul className={`${styles.navLinks}`}>
            <li><NavLink
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/">Home</NavLink>
            </li>
            <li><NavLink
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/team">Team</NavLink>
            </li>
            <li><NavLink
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/about">About</NavLink>
            </li>
            <li><NavLink
                className={({ isActive }) => {
                    const linkClasses = [styles.navLink];
                    if (isActive) linkClasses.push(styles.active);

                    return linkClasses.join(" "); // returns "navLink" or "navLink active"
                }} to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}

export default DesktopLinks