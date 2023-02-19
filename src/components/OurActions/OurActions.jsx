import React from 'react'
import Card from '../Card/Card'
import styles from './OurActions.module.scss'
import dummy1 from '../../assets/img/rugby_academy_hero_dummy.jpg'
import dummy2 from '../../assets/img/rugby_academy_hero_dummy2.jpg'

const OurActions = () => {
    return (
        <div>
            <h4 className={styles.actionHeadline}>Unsere Maßnahmen</h4>
            <div className={styles.cardsWrapper}>
                <div className={styles.cards}>
                    <Card
                        title={'Masterclass'}
                        position={'1. Reihe'}
                        descriptionText={'mit Michel Poppmaier, Headcoach Frankfur 1880 und ehemaliger deutscher Nationalspieler'}
                        image={dummy1}
                        btnLink={'https://www.google.de/'}
                    />
                    <Card
                        title={'Masterclass'}
                        position={'Ecken / Schluss'}
                        descriptionText={'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007'}
                        image={dummy2}
                        btnLink={'https://www.google.de/'}
                    />
                    <Card
                        title={'Masterclass'}
                        position={'1. Reihe'}
                        descriptionText={'mit Michel Poppmaier, Headcoach Frankfur 1880 und ehemaliger deutscher Nationalspieler'}
                        image={dummy1}
                        btnLink={'https://www.google.de/'}
                    />
                    <Card
                        title={'Masterclass'}
                        position={'1. Reihe'}
                        descriptionText={'mit Michel Poppmaier, Headcoach Frankfur 1880 und ehemaliger deutscher Nationalspieler'}
                        image={dummy1}
                        btnLink={'https://www.google.de/'}
                    />
                </div>
            </div>
        </div>
    )
}

export default OurActions