import React from 'react'
import Button from '../Button/Button'

import styles from './Card.module.scss'

const Card = ({ id, title, position, descriptionText, image, cardLink }) => {
    console.log('cardLink', cardLink);
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardTextImage}>
                <div className={styles.cardText}>
                    <h2 className={styles.cardSubtitleRed}>{title}</h2>
                    <h2 className={styles.cardSubtitleWhite}>{position}</h2>
                    <p className={styles.cardDescription}> {descriptionText} </p>
                </div>
                <img className={styles.cardImage} src={image} alt="Card content diplay" />
            </div>
            <Button
                className={styles.cardBtn}
                text={'mehr erfahren'}
                btnLink={cardLink}
                btnWidth={'75%'}
            />
        </div>
    )
}

export default Card