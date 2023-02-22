import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ text, btnLink, btnBackground = 'transparent', btnWidth = '100%', btnMinWidth, btnMaxWidth, }) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor: `${btnBackground}`, width: `${btnWidth}`, minWidth: `${btnMinWidth}`, btnMaxWidth: `${btnMaxWidth}` }}
        >
            {btnLink
                ? (
                    <Link to={btnLink}>{text}</Link>
                ) : text}
        </button>
    )
}

export default Button