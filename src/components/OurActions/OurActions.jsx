import Card from '../Card/Card'
import data from '../../data'
import styles from './OurActions.module.scss'

const OurActions = () => {
    let slicedCardData = []
    const maxCardsToShow = 4

    const sliceCardData = () => {
        slicedCardData = data.slice(0, maxCardsToShow)
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
                            cardLink={`/classes/${data.positionRaw}+${data.creationDate}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurActions