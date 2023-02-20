import React from 'react'
import Button from '../button/Button'

import styles from './Card.module.scss'

const Card = ({ title, position, descriptionText, image, btnLink }) => {
    return (
        <div className={styles.cardWrapper}>
            <h2 className={styles.cardSubtitleRed}>{title}</h2>
            <h2 className={styles.cardSubtitleWhite}>{position}</h2>
            <p className={styles.cardDescription}> {descriptionText} </p>
            <img className={styles.cardImage} src={image} alt="Card content diplay" />
            <Button
                className={styles.cardBtn}
                text={'mehr erfahren'}
                btnLink={btnLink}
                btnWidth={'75%'}
            />
        </div>
    )
}

export default Card