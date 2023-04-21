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
const EntirePageContainer = styled.div`
    padding-left: 44px;
    padding-right: 44px; 
    /* width: 100%; */
    z-index: 1;
    height: 100%;
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
    height: 100%;
    /* height: fit-content;
    width: fit-content; */
    margin-top: 100px;
    padding-top: 44px;
    padding-left: 72px; 
    padding-right: 72px; 
    background-color: white;
    border-radius: 16px;
    
    z-index: 1;
    @media (max-width:600px){
      margin-top: 100px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 0px;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      padding-bottom: 120px;
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
          </Routes>     
       </ContentContainer>
       </Router>
       </EntirePageContainer>
    </div>
  );
}

export default App;
