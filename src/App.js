import './App.css';
import Navbar from './components/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NestaVille from './pages/nesta_ville';
import NestaDesign from './pages/nesta_design';
import styled from 'styled-components';
import  GetNested  from './components/get_nested';
import Geolocation from './components/geolocation';
import Demo from './components/geolocation';
import GetGeoLocation from './components/geolocation';
import { Footer } from './components/footer';
import { ContactUs } from './pages/contact_us';
import { PrivacyPoilicyPage } from './pages/privacy_policy';
const EntirePageContainer = styled.div`
    padding-left: 44px;
    padding-right: 44px; 
    /* width: 100%; */
    z-index: 1;
    height: 100%;
    /* height: 100%; */
    overflow: scroll;
    background-color:#F5F5F5;
    @media (max-width:600px){
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      background-color: white;
    }
`

const ContentContainer = styled.div`
    /* height: 100%; */
    height: 100%;
    width: fit-content;
    margin-top: 120px;
    /* padding-top: 72px; */
    /* padding-left: 72px; 
    padding-right: 72px;  */
    background-color: white;
    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;
    /* padding-bottom: 40px; */
    /* margin-bottom: 20px;  */
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    ::-webkit-scrollbar{
      display: none;
    }
    
    z-index: 1;
    @media (max-width:600px){
      margin-top: 100px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 0px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      height: auto;
      padding-bottom: 0px;
      background-color: white;
    }
`


function App() {
  return (
    <div className="App">
       <EntirePageContainer>
       <Router>
        <Navbar/>
       <ContentContainer>
          {/* <GetNested /> */}
          <Routes>
              <Route path='/'  Component={NestaDesign} /> 
              <Route path='/design'  Component={NestaDesign} />
              <Route path='/ville'  Component={NestaVille} />
              <Route path='/get-nested' Component={GetNested}/>
              <Route path='/contact-us' Component={ContactUs}/>
              <Route path='/privacy' Component={PrivacyPoilicyPage}/>
          </Routes>     
         
       </ContentContainer>
       <Footer/>
       </Router>
        
       </EntirePageContainer>
    </div>
  );
}

export default App;
