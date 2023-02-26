import Card from '../Card/Card'
import data from '../../data'
import styles from './OurActions.module.scss'

const OurActions = () => {
    // todo: order cards by creation date desc and then four from it
    let slicedCardDataM = []
    let slicedCardDataD = []
    const maxCardsToShowMobile = 4
    const maxCardsToShowDesktop = 3

    const sliceCardDataMobile = () => {
        slicedCardDataM = data.slice(0, maxCardsToShowMobile)
    }
    const sliceCardDataDesktop = () => {
        slicedCardDataD = data.slice(0, maxCardsToShowDesktop)
    }

    sliceCardDataMobile()
    sliceCardDataDesktop()

    return (
        <div className={styles.ourActionsWrapper}>
            <h4 className={styles.actionHeadline}>Unsere Maßnahmen</h4>
            <div className={styles.cardsWrapper}>
                <div className={[styles.cards, styles.cardsMobile].join(' ')}>
                    {slicedCardDataM.map(data => (
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
                <div className={[styles.cards, styles.cardsDesktop].join(' ')}>
                    {slicedCardDataD.map(data => (
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