import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

import Links from './Links'
import styles from './Nav.module.scss'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu)
    }

    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    return (
        <div className={styles.navWrapper}>
            <nav>
                {/* TODO: use image instead of text */}
                <div className={styles.logo}>
                    <Link className={styles.link} to='/'>
                        Rugby Academy Hannover
                    </Link>
                </div>
                {!openMenu && (<FiMenu className={styles.hamburger} onClick={handleOpenMenu} />)}
                {openMenu && (<FiX className={styles.closeMenu} onClick={handleOpenMenu} />)}
                {openMenu && <Links handleCloseMenu={handleCloseMenu} />}
            </nav>
        </div>
    )
}

export default Nav