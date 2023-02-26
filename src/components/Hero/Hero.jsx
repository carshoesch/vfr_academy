import React from 'react'

import styles from '../Hero/Hero.module.scss'

const Hero = () => {
    return (
        <>
            <div className={[styles.heroWrapper, styles.heroMobile].join(' ')}>
                <h1 className={styles.heroTitle}>Rugby Academy Hannover</h1>
                <div className={styles.heroSubtitles}>
                    <h2 className={styles.heroSubtitleRed}>Wissen von Experten</h2>
                    <h2 className={styles.heroSubtitleWhite}>für Spieler und Trainer</h2>
                </div>
            </div>
            <div className={[styles.heroWrapper, styles.heroDesktop].join(' ')}>
                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>Rugby Academy Hannover</h1>
                    <div className={styles.heroSubtitles}>
                        <h2 className={styles.heroSubtitleRed}>Wissen von Experten</h2>
                        <h2 className={styles.heroSubtitleWhite}>für Spieler und Trainer</h2>
                        <h3 className={styles.profit}>Profitiere vom Wissen echter Experten aus der ganzen Welt</h3>
                    </div>
                </div>
                <div className={styles.heroRight}>
                </div>
            </div>
        </>
    )
}

export default Hero