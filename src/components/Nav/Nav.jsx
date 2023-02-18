import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import Links from './Links'
import styles from './Nav.module.scss'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu)
    }

    return (
        <div className={styles.navWrapper}>
            <nav>
                {/* TODO: use image instead of text */}
                <div className={styles.logo}>
                    Rugby Academy Hannover
                </div>
                {!openMenu && (<FiMenu className={styles.hamburger} onClick={handleOpenMenu} />)}
                {openMenu && (<FiX className={styles.closeMenu} onClick={handleOpenMenu} />)}
                {openMenu && <Links openMenu={openMenu} />}
            </nav>
        </div>
    )
}

export default Nav