import styled from "styled-components"
import testImage from "./test_image.png"
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import { Title } from "./title"
import { Indicator } from "../../elements/banner/indicator";
import React from 'react';

const StyledOuterDiv = styled.div`
        width: 100%;
        height: 634px;
        max-width: 100%;
        max-height: 634px;
`

const StyledDiv = styled.div`
        width: 100%;
        height: 634px;
        max-width: 100%;
        max-height: 634px;
        background: ${(props) => `url(${props.src})`} no-repeat center center fixed; 
        background-attachment: scroll;
        position: relative;
        background-size:100% auto;
        background-repeat: no-repeat;
        background-position: center;
        border-radius:20px;
        animation: animatedBackground ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        @media (max-width: 1200px) {
          width:100%;
          max-width:100%;
          background-size:cover;          
        }
        @media (max-width:600px){
          width:100%;
          max-width:100%;
          background-size:cover;
        }

        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        @keyframes animatedBackground {
            0% {
                opacity: .6;
            }
            100% {
                opacity: 1;
            }
        }
`


const StyledImageDiv = styled.div`
        width: 100%;
        height: 634px;
        max-width: 100%;
        max-height: 634px;
        position: relative;
        background-attachment: scroll;
        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        background: ${(props) => `url(${props.src})`} no-repeat center center fixed; 
`

const DivEnd = styled.div`
   position: absolute;
   bottom: 66px;
   right: 59px;
   @media (max-width:600px){
          position: absolute;
          bottom: 550px;
          right: 25px;
          
    }
`

const DivText = styled.div`
    position: absolute;
    left: 58px;
    bottom: 42px;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
    }
`
const transitions = {
    entering: {
      display: 'block'
    },
    entered: {
      opacity: 0,
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

export const Banner =(props)=>{
    console.log("PROPS SRC"+ props.src)
    console.log(testImage)
    return <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv src={props.src} style={{...transitions[state]}}>
                    <DivEnd> 
                        <Indicator OnPrevIndicatorClick={props.OnPrevIndicatorClick} onNextIndicatorClick={props.onNextIndicatorClick}/>
                    </DivEnd>
                    <Title props={props} animationflag = {props.animationflag} title={props.title}/>
                </StyledDiv>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}