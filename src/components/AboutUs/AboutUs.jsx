import React from 'react'
import Button from '../button/Button'
import styles from './AboutUs.module.scss'

const AboutUs = () => {
    return (
        <div className={styles.aboutUsWrapper}>
            <h4 className={styles.aboutUsHeadline}>
                Über Uns
            </h4>
            <div className={styles.aboutUsParagraphs}>
                <p>
                    Rugby ist eine herzensangelegenheit, deshalb haben wir es
                    uns zur Aufgabe gemacht, den Sport vorran zu bringen indem
                    wir motivierten Spielern und Trainer die Möglichkeit zu geben
                    von Experten des Sport zu profiteren. Das langfristige Ziel ist
                    es dadurch das Leistungsniveau des deutschen Rugbysports zu
                    heben.
                </p>
                <p>
                    Nulluptatates cupis est vit hillendae. Invelicatur?
                    Unto te parchic iissim hilitet, sollatiorem ime omnisqui bearchilit, sandic te nos soloria tiberiorro velest voluptae volupta
                    dolestes et essimol lorumet eicid magnihilis sint aut plique nos
                    erumquis de con nihitate dolupta tiuntioris volorum a quiscius
                    eum aut ditem. Itae nieniss equunti offic to mos non pe pereheni volo est, senda consed mosam, natiunt.
                </p>
            </div>
            <Button
                text={'Kontakt aufnehmen'}
                btnLink={'https://www.google.de'}
                btnWidth={'75%'}
            />
        </div>
    )
}

export default AboutUs