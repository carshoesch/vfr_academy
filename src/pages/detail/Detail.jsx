import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './Detail.module.scss'
import data from '../../data'
import Button from '../../components/Button/Button'
import Contact from '../../components/Contact/Contact'
import OurPartners from '../../components/OurPartners/OurPartners'
import Footer from '../../components/Footer/Footer'

const Detail = () => {
    // gets me my url parameter which is related to the specific detailpage
    const { classId } = useParams()
    // check if params are within data object and render it
    const paramPosition = classId.split('+')[0]
    const paramDate = classId.split('+')[1]
    let detailPageData = {}
    // loop over every entry of data and check if position and date match
    data.map(d => {
        if (d.positionRaw === paramPosition && d.creationDate === paramDate) {
            detailPageData = d
        }
        return detailPageData
    })
    console.log('detailPageData', detailPageData);

    return (
        <div className={styles.detailWrapper}>
            {/* hero */}
            <div className={styles.detailHero} style={{ backgroundImage: `url(${detailPageData.image})` }}>
                <div className={styles.subtitles}>
                    <h2 className={styles.heroSubtitleRed}>{detailPageData.title}</h2>
                    <h2 className={styles.heroSubtitleWhite}>{detailPageData.position}</h2>
                </div>
            </div>
            <div className={styles.detailHeadlineDescription}>
                <h2 className={styles.detailHeadline}>{detailPageData.detailHeadline}</h2>
                <p className={styles.detailDescription}>{detailPageData.detailDescription}</p>
                {/* where should this button lead? */}
                <Button
                    text={'Platz buchen'}
                    btnWidth={'fit-content'}
                />
            </div>
            {/* expert short bio */}
            <div className={styles.detailExpertBio}>
                <h2 className={styles.expertHeadline}>{detailPageData.expertHeadline}</h2>
                <div className={styles.expertCloseup}>
                    {/* todo: need expert image */}
                    <img src={detailPageData.image} alt="Expert" />
                    <p className={styles.expertDescription}>{detailPageData.expertDescription}</p>
                </div>
            </div>
            {/* table of content */}
            <div className={styles.detailMasterclass}>
                <h2 className={styles.tableHeadline}>{detailPageData.tableHeadline}</h2>
                <div className={styles.tableContent}>
                    <div className={styles.tableModules}>
                        <div className={styles.left}>
                            <p className={styles.tableDescription}>Modul 1: {detailPageData.modules.module1}</p>
                            <p className={styles.tableDescription}>Modul 2: {detailPageData.modules.module2}</p>
                            <p className={styles.tableDescription}>Modul 3: {detailPageData.modules.module3}</p>
                            <p className={styles.tableDescription}>{detailPageData.modules.break}</p>
                            <p className={styles.tableDescription}>Modul 4: {detailPageData.modules.module4}</p>
                            <p className={styles.tableDescription}>Modul 5: {detailPageData.modules.module5}</p>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.tableDescription}>Wann: {detailPageData.when}</p>
                            <p className={styles.tableDescription}>Wo: {detailPageData.where}</p>
                            <p className={styles.tableDescription}>Kosten: {detailPageData.costs}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* booking */}
            <Button
                text={'Platz buchen'}
                btnWidth={'fit-content'}
            />
            {/* sign up */}
            <Contact />
        </div>
    )
}

export default Detail