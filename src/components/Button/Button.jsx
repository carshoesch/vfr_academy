import React from 'react'
import styles from './Button.module.scss'

const Button = ({ text, btnLink, btnBackground = 'transparent', btnWidth = '100%' }) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor: `${btnBackground}`, width: `${btnWidth}` }}
        >
            {btnLink
                ? (
                    <a href={btnLink}>{text}</a>
                ) : text}
        </button>
    )
}

export default Button