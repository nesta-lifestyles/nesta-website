
import React from 'react'
import styles from './footer.module.css'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import mapLocation from '../../images/map_location2.png'

// import { faCheckSquare, faFacebook } from '@fortawesome/free-solid-svg-icons'
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } 

class Footer extends React.Component {
    
render(){
    // library.add(fab, faCheckSquare, faFacebook)
    return(
        <div>
            <div className={styles.footer}>
                <div className={styles.footerInformation}>
                    INFORMATION
                    <div>
                        <Router>
                        <li className={styles.li}>
                            <Link  className={styles.text} to="/contact"> contact us </Link>
                        </li>
                        <li className={styles.li}>
                            <Link  className={styles.text} to="/about"> about us </Link>
                        </li>
                        <li className={styles.li}>
                            <Link  className={styles.text}  to="/careers"> careers </Link>
                        </li>
                        </Router>
                    </div>
                </div>
                <div className={styles.footerLegal}> 
                    LEGAL
                    <div>
                        <Router>
                        <li className={styles.li}>
                            <Link  className={styles.text} to="/terms"> terms and conditions </Link>
                        </li>
                        <li className={styles.li}>
                            <Link  className={styles.text} to="/privacy"> privacy policy</Link>
                        </li>
                        <li className={styles.li}>
                            <Link  className={styles.text}  to="/cookie"> cookie policy </Link>
                        </li>
                        </Router>
                    </div>
                </div>
                <div className={styles.footerSocial}>
                    <div>
                        <FontAwesomeIcon className={styles.socialFaIcons} icon={faFacebookF} />
                        <FontAwesomeIcon className={styles.socialFaIcons}  icon={faInstagram} />
                        <FontAwesomeIcon className={styles.socialFaIcons}  icon={faTwitter} />
                        <FontAwesomeIcon className={styles.socialFaIcons}  icon={faPinterest} />
                        <FontAwesomeIcon className={styles.socialFaIcons} icon={faWhatsapp} />
                    </div>
                    {/* <div className={styles.socialAddress}>
                    address : 11C,6th cross ,HSR
                    layout ,Bengaluru-22.India
                    </div> */}
                </div>
                <div>
                    {/* <img className={styles.mapLocation} src={mapLocation}/> */}
                </div>

            </div>

            <div className={styles.copyrightDivider} style={{flex: 1, height: '1px'}} ></div>
            <div className={styles.copyright}> 
                    Nesta <FontAwesomeIcon className={styles.copyRightFaIcon} icon={faCopyright}/> 2022
            </div>
        </div>
        )
}
}
export default Footer;