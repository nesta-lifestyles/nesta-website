

import React from 'react'
import styles from './footerDivider.module.css'

class FooterDivider extends React.Component {

    render(){
        return(<div>
                <div className={styles.dividerMessage}>
                    LIVE A BETTER LIFESTYLE >>
                </div>
                 <div className={styles.divider} ></div>
        </div>)
    }
}

export default FooterDivider;