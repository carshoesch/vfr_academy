import React from 'react'
import styles from './Button.module.scss'

const Button = ({ text, btnLink, btnBackground = 'transparent', btnWidth = '100%', btnMinWidth, btnMaxWidth, textColor = '#fff' }) => {
    return (
        <button
            className={styles.button}
            style={{
                backgroundColor: `${btnBackground}`, width: `${btnWidth}`, minWidth: `${btnMinWidth}`,
                btnMaxWidth: `${btnMaxWidth}`, color: `${textColor}`
            }}
        >
            {btnLink
                ? (
                    <a href={btnLink}>{text}</a>
                ) : text}
        </button>
    )
}

export default Button