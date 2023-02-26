import React from 'react'

import Button from '../Button/Button'
import styles from './Card.module.scss'

const Card = ({ id, title, position, descriptionText, image, cardLink }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardText}>
                <h2 className={styles.cardSubtitleRed}>{title}</h2>
                <h2 className={styles.cardSubtitleWhite}>{position}</h2>
                <p className={styles.cardDescription}> {descriptionText} </p>
            </div>
            <img className={styles.cardImage} src={image} alt="Card content diplay" />
            <Button
                className={styles.cardBtn}
                text={'mehr erfahren'}
                btnLink={cardLink}
                btnWidth={'50%'}
            />
        </div>
    )
}

export default Card