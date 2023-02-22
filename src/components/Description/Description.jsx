import React from 'react'
import Button from '../Button/Button'

import styles from './Description.module.scss'

const Description = () => {
    return (
        <div className={styles.descriptionWrapper}>
            <h4>
                Profitiere vom Wissen echter
                Experte aus der ganzen Welt
            </h4>
            <p>Nutze das Angebot der Rugby Academy Hannover und werde
                ein bessser Spieler und/oder Trainer. Unser Ziel ist es die Möglichkeit zu schaffen, mit Spezialisten zu arbeiten und die neue
                Impulse auf die Rugby-Plätze Deutschlands zu bringen.</p>
            <Button
                text={'mehr über uns'}
                btnWidth={'25%'}
                btnMinWidth={'150px'}
                btnMaxWidth={'300px'}
            />
        </div>
    )
}

export default Description