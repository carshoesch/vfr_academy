import React from 'react'
import styles from './OurPartners.module.scss'

export const PartnerCard = ({ partnerName, partnerLogo }) => {
    return (
        <div className={styles.partnerWrapper}>
            <img src={partnerLogo} alt="Partner Logo" />
            <p>{partnerName}</p>
        </div>
    )
}

// export default PartnerCard