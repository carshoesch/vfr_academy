import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './Detail.module.scss'
import data from '../../data'
import Button from '../../components/Button/Button'

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

    const moduleData = Object.entries(detailPageData.modules).map(([key, value]) => (
        // get modules object rendered out properly
        JSON.stringify(`${key}: ${value}`)

    ))
    console.log('detailPageData', detailPageData);
    return (
        <div className={styles.detailWrapper}>
            {/* hero */}
            <div className={styles.detailHeadlineDescription}>
                <h2>{detailPageData.detailHeadline}</h2>
                <p>{detailPageData.detailDescription}</p>
                {/* where should this button lead? */}
                <Button
                    text={'Platz buchen'}
                    btnWidth={'fit-content'}
                />
            </div>
            {/* expert short bio */}
            <div className={styles.detailExpertBio}>
                <h2>{detailPageData.expertHeadline}</h2>
                <div className={styles.expertCloseup}>
                    <img src={detailPageData.image} alt="Expert" />
                    <p>{detailPageData.expertDescription}</p>
                </div>
            </div>
            {/* table of content */}
            <div className={styles.detailMasterclass}>
                <h2 className={styles.tableHeadline}>{detailPageData.tableHeadline}</h2>
                <div className={styles.tableContent}>
                    <div className={styles.tableModules}>
                        {moduleData.map((module) => (
                            module
                        ))}
                    </div>
                    <div className={styles.tableInfos}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail