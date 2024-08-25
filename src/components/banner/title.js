import styled from "styled-components"
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import { H1, H2 } from "../../elements/text";
import React from 'react';
import { ExploreButton, MeetUsButton } from "../../elements/button/know_more";
import { useNavigate } from "react-router-dom";

const DivText = styled.div`
    /* position: absolute; */
    /* left: 60px;
    bottom: 10px; */
    z-index: 1;
    /* height: 153px; */
    /* -webkit-animation-name: change;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite; */
    animation: 2s ease-out 0s 1 change;
    @media (max-width:600px){
      position: relative;
      left: 15px;
      bottom: 12px;
    }

    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    
    @keyframes change {
      0%, 12.66%{transform:translate3d(0,100%,0);}
      /* 16.66%, 29.32% {transform:translate3d(0,50%,0);} */
      33.32%, 45.98% {transform:translate3d(0,0%,0);}
      /* 49.98%, 62.64% {transform:translate3d(0,75%,0);} */
      /* 66.64%, 79.3% {transform:translate3d(0,100%,0);} */
      /* 83.3%,  95.96% {transform:translate3d(0,25%,0);} */
      }
`

const TitleContainer = styled.div`
  position: absolute;
  top: 70%;
  left: 10%;
  display: flex;
  gap:10px;
  flex-direction:column;
  /* gap: 10px; */
  width: 100%;
  bottom: 50%;
  @media (max-width: 600px) {
    top: 50%;
    left: 1%;
    height: auto;
    gap: 5px;
  }
`

const DivButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  /* height: 153px; */
  width: 100%;
  @media (max-width: 600px) {
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
`



const transitions = {
    entering: {
      display: 'block'
    },
    entered: {
      opacity: 1,
      display: 'block'
    },
    exiting: {
      opacity: 0,
      display: 'block'
    },
    exited: {
      opacity: '0',
      display: 'none'
    }
  };


const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  @media (max-width: 600px) {
    flex-direction: column;
    
  }
`



export const Title = (props) => {
  const navigate = useNavigate();
  const handleExploreModels = (link)=>{
      navigate(link)
  }

  return (
    <TitleContainer id="title_container">
        {/* <DivText2> */}
          <Container>
            <H1 value={props.title} color="white" height="auto" width="100%"></H1>
            <DivText>
              <H1 value="" color={props.color_codes} width= "100%" height="auto"/>
            </DivText>
          </Container>
          
          <DivButtonContainer>
              <ExploreButton  onClick={()=>handleExploreModels(props.link)}> Models</ExploreButton>
              <MeetUsButton onClick={props.handleMeetUsButton} /> 
          </DivButtonContainer>
        {/* </DivText2> */}
    </TitleContainer>)
}


export const OnlyTitle = (props) => {
  return <SwitchTransition made="out-in">
  <CSSTransition key={props.animationflag} 
   timeout={300} 
   classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
     {state => <div style={{
                  ...transitions[state]
          }}>
            <TitleContainer>
                <H2 color="white" width= "100%" height="40px" weight="600">{props.title} </H2>
            </TitleContainer>
      </div>}
  </CSSTransition>
</SwitchTransition>
}