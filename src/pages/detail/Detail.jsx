import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.scss'
import data from '../../data'

const Detail = () => {
    // gets me my url parameter which is related to the specific detailpage
    const { classId } = useParams()
    // check if params are within data object and render it
    const paramPosition = classId.split('+')[0]
    const paramDate = classId.split('+')[1]
    let detailPageData = {}
    // loop over every entry of data and check if position and date match
    data.forEach(d => {
        if (d.positionRaw === paramPosition && d.creationDate === paramDate) {
            detailPageData = d
        }
    })
    console.log('detailPageData', detailPageData);
    return (
        <div className={styles.detailWrapper}>
            {/* get screen design to visualize the object */}
            Detail stuff: {JSON.stringify(detailPageData)}
        </div>
    )
}

export default Detail