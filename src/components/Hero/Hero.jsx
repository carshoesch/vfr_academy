import React from 'react'

import styles from '../hero/Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <h1 className={styles.heroTitle}>Rugby Academy Hannover</h1>
            <div className={styles.heroSubtitles}>
                <h2 className={styles.heroSubtitleRed}>Wissen von Experten</h2>
                <h2 className={styles.heroSubtitleWhite}>für Spieler und Trainer</h2>
            </div>
        </div>
    )
}

export default Hero