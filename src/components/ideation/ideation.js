
import React from 'react'

import Ideationg2 from '../../images/ideation2.png'
import Ideation1 from '../../images/ideation1.jpg'
import styles from './ideation.module.css'


class Ideation extends React.Component {

    render(){
        return(
            <div className={styles.ideation}>
                <div className={styles.mainIdeation} >
                        <div className={styles.mainIdeationTitleContainer}>
                            <p className={styles.mainIdeationTitleH1}>SMARTER <br></br> SPACES...</p>
                            <p className={styles.mainIdeationTitleH3}>new age-new generation-new tech<br></br> <span style={{color:'red'}}>same home ?</span></p>
                        </div>
                        <div className={styles.mainIdeationImageContainer}>
                            <img className={styles.ideation2Img} src={Ideation1} />
                        </div>
                </div>
                <div className={styles.secondIdeation}>
                    <img className={styles.ideation2Img} src={Ideationg2} />
                </div>
            </div>
        )
    }
}
export default Ideation;