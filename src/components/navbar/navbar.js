import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
import logo from '../../images/logo_new_bg_white.png'
class NarBar extends React.Component {
    
    render(){
        return(
            <div className={styles.header}>
                <div className={styles.navbar}>
                <li className={styles.li}>
                    <div className={styles.logo_container}>
                        <img className={styles.logo} src={logo}></img>
                    </div>    
                </li>
                {/* <li className={styles.li}>
                    <Link  className={styles.text} to="/homes"> nesta homes </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.text}to="/decors"> nesta decords</Link>
                </li >
                <li className={styles.li}> 
                    <Link  className={styles.text} to="/intelligence" > nesta intelligence</Link>
                </li>
                <li className={styles.li}>
                    <Link  className={styles.text} to="/interiors"> nesta interiors</Link>
                </li> */}
            </div>
            </div>
            
        )       
    }
}
export default NarBar;