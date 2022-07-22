
import React from 'react'
import styles from './features.module.css'
import feature1Image from '../../images/features1.svg'
import features2Image from '../../images/features2.svg'
import features3Image from '../../images/features3.svg'
import features4Image from '../../images/features4.svg'

class Features extends React.Component {

    render(){
        return(
        <div className={styles.features}>
                <div className={styles.eachFeatures}>
                        <img  className={styles.feturesImg} src={feature1Image} />
                        <div className={styles.featureName}>
                            Creative <br></br>Design
                        </div>
                </div>
                <div className={styles.eachFeatures}>
                        <img className={styles.feturesImg}  src={features2Image} />
                        <div className={styles.featureName}>
                            Home at <br></br>Ease
                        </div>
                </div>
                <div className={styles.eachFeatures}>
                        <img  className={styles.feturesImg}  src={features3Image} />
                        <div className={styles.featureName}>
                           Optimum <br></br>Planning
                        </div>
                </div>
                <div className={styles.eachFeatures}>
                        <img className={styles.feturesImg}  src={features4Image} />
                        <div className={styles.featureName}>
                            Centric <br></br>Approach
                        </div>
                </div>
        </div>)
    }
}

export default Features;