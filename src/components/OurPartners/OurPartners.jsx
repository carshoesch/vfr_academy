import React from 'react'
import styles from './OurPartners.module.scss'

import dummy1 from '../../assets/img/rugby_academy_hero_dummy.jpg'
import PartnerCard from './PartnerCard'

const OurPartners = () => {
    const partners = [
        {
            name: 'VfR Döhren',
            image: dummy1
        },
        {
            name: 'Germania List',
            image: dummy1
        },
        {
            name: 'HRC',
            image: dummy1
        },
        {
            name: 'St. Pauli',
            image: dummy1
        },
    ]
    return (
        <div>
            <h4 className={styles.ourPartnersTitle}>Unsere Partner</h4>
            <div className={styles.partner}>
                {partners.map(partner => (
                    <PartnerCard
                        key={partner.name}
                        partnerLogo={partner.image}
                        partnerName={partner.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurPartners