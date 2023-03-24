import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Features from './components/features/features'
import FooterDivider from './components/footer_divider/footerDivider';
import Ideation from './components/ideation/ideation';
import Map from './components/footer/map/office_location';
import underMentenence from './images/maintainence_page.png';

const root = ReactDOM.createRoot(document.getElementById('root'));

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 

root.render(
  <div >
   <Router>
      <div className={styles.navBar}>
        <Navbar/>
      </div>
    </Router>
    <div style={{
      position:'absolute',
      marginLeft:'auto',
      marginRight:'auto',
      width:'100%',
      maxWidth:'100%',
      height:'1000%',
      maxHeight:'100%'
    }}>
      <img className= {styles.image} src={underMentenence} />
    </div>
    
     
  {/* <div className={styles.ideation}>
    <Ideation />
  </div>
  <div className={styles.features}>
      <Features/>
  </div>  
      <div>
        <FooterDivider/>
      </div>
  <div className={styles.footer}>
    <Footer></Footer>
  </div> */}

  </div>
  
  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
