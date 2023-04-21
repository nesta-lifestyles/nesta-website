import styled from "styled-components";
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from "react-transition-group";
import { useRef, useState } from "react";
import React from 'react';

const StyledH1 = styled.div`
    position: relative;
    width: ${props => props.width ===undefined?"479px":props.width};
    height: ${props => props.height ===undefined?"45px":props.height};
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    /* animation: 1s ease-out 0s 1 slideInFromLeft; */
    line-height: 45px;
    opacity: 0.8;
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};
    /* @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    } */
/* } */
`
const StyledTitle = styled.div`
    position: relative;
    width: ${props => props.width ===undefined?"479px":props.width};
    height: ${props => props.height ===undefined?"45px":props.height};
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    /* animation: 1s ease-out 0s 1 slideInFromLeft; */
    line-height: 100%;
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};
    /* @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    } */
/* } */
`

const StyledTextWith500Weight = styled.div`
    position: relative;
    width: ${props => props.width ===undefined?"479px":props.width};
    height: ${props => props.height ===undefined?"45px":props.height};
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    /* animation: 1s ease-out 0s 1 slideInFromLeft; */
    line-height: 100%;
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};
    /* @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    } */
/* } */
@media (max-width: 600px) {
        font-size: 21px;
        color: #1B1E1E;
        width: 245px;
        height: 64px;
    }
`


const StyledText = styled.p`
    width: ${props => props.width ===undefined?"479px":props.width};
    height: ${props => props.height ===undefined?"216px":props.height};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};;
    @media (max-width: 600px) {
      width: ${props => props.width ===undefined?"479px":props.width};
      height: auto;
      font-weight: 400;
      font-size: 16px;
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

export const H1 = (props) => {
    return <StyledH1 width={props.width} height={props.height} color={props.color}>{props.value}</StyledH1>
}    

export const Title = (props) => {
  return <StyledTitle width={props.width} height={props.height} color={props.color}>{props.value}</StyledTitle>
}

export const Text = (props) => {
    return <StyledText width={props.width} height={props.height} color={props.color}>{props.value}</StyledText>
}

export const Text500Weight = (props) => {
  return <StyledTextWith500Weight width={props.width} height={props.height} color={props.color}>{props.value}</StyledTextWith500Weight>
}