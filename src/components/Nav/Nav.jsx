import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

import Links from './Links'
import styles from './Nav.module.scss'
import logo from '../../assets/img/RAH_Logo_final.svg'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu)
    }

    const handleCloseMenu = () => {
        openMenu && setOpenMenu(false)
    }

    return (
        <div className={styles.navWrapper}>
            <nav>
                {/* TODO: create additional desktop navigation */}
                <div className={styles.logo}>
                    <NavLink className={styles.link} to='/' onClick={handleCloseMenu}>
                        <img src={logo} alt="Academy Logo" />
                    </NavLink>
                </div>
                {!openMenu && (<FiMenu className={styles.hamburger} onClick={handleOpenMenu} />)}
                {openMenu && (<FiX className={styles.closeMenu} onClick={handleOpenMenu} />)}
                {openMenu && <Links handleCloseMenu={handleCloseMenu} />}
            </nav>
        </div>
    )
}

export default Nav