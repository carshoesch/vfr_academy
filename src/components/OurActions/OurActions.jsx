import React, { useState, useId } from 'react'

import Card from '../card/Card'
import styles from './OurActions.module.scss'
import dummy1 from '../../assets/img/rugby_academy_hero_dummy.jpg'
import dummy2 from '../../assets/img/rugby_academy_hero_dummy2.jpg'

import _uniqueId from 'lodash/uniqueId';

const OurActions = () => {
    let slicedCardData = []
    const maxCardsToShow = 4
    const cardData = [
        {
            id: useId(),
            title: 'Masterclass',
            position: '1. Reihe',
            description: 'mit Michel Poppmaier, Headcoach Frankfur 1880 und ehemaliger deutscher Nationalspieler',
            image: dummy1,
            // todo: need to redirect to a certain page based on the id of the object 
            cardLink: 'https://www.google.de'
        },
        {
            id: useId(),
            title: 'Masterclass',
            position: 'Innen',
            description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
            image: dummy2,
            cardLink: 'https://www.google.de'
        },
        {
            id: useId(),
            title: 'Masterclass',
            position: '2. Reihe',
            description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
            image: dummy2,
            cardLink: 'https://www.google.de'
        },
        {
            id: useId(),
            title: 'Masterclass',
            position: 'Flanker & Nr. 8',
            description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
            image: dummy2,
            cardLink: 'https://www.google.de'
        },
        {
            id: useId(),
            title: 'Masterclass',
            position: 'Gedrängehalb',
            description: 'mit Brian Habana, ehemaliger südafrikanischer Nationalspiler und Weltmeister von 2007',
            image: dummy2,
            cardLink: 'https://www.google.de'
        },
    ]

    const sliceCardData = () => {
        slicedCardData = cardData.slice(0, maxCardsToShow)
    }

    sliceCardData()

    return (
        <div>
            <h4 className={styles.actionHeadline}>Unsere Maßnahmen</h4>
            <div className={styles.cardsWrapper}>
                <div className={styles.cards}>
                    {slicedCardData.map(data => (
                        <Card
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            position={data.position}
                            descriptionText={data.description}
                            image={data.image}
                            cardLink={data.cardLink}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default OurActions