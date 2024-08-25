import './App.css';
import Navbar from './components/navbar';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from './router/hooks';
import Footer from './components/footer';
import { OverlayScreen } from './components/overlay';
import { AllRoutes } from './router/all_routes';

const EntirePageContainer = styled.div`
    /* padding-left: 44px;
    padding-right: 44px;
    z-index: 1;
    height: 100%;
    background-color:white;
    @media (max-width:600px){
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      background-color: white;
    } */
`

export const MainContainerDiv = styled.div`
  margin-left: 70px;
  margin-right: 73px;
  @media (max-width:600px){
      margin-left: 0px;
      margin-right: 0px;
  }
`

const ContentContainer = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media (max-width:600px){
      margin-left: 0px;
      margin-right: 0px;
      padding-top: 0px;
      background-color: white;
    } 

    /* height: 100%;
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
      background-color: white;
    } */
`

function App() {
 
  return (
    <div className="App">
        
      {/* <React.StrictMode> */}
       <EntirePageContainer>
        <Router>
          <Navbar/>
          <ContentContainer>
           <OverlayScreen />
           <ScrollToTop/>
           <AllRoutes/>
          <Footer/>   
          </ContentContainer>
        </Router>  
       </EntirePageContainer>
       {/* </React.StrictMode> */}
      
    </div>
  );
}

export default App;
