import React from 'react';
import styled from "styled-components"

const StyledButton = styled.button`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    background: #1B1E1E;
    cursor: auto;
    color: white;
    border-radius: 8px;
`

const ExploreButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: var(--Secondary-C4, #fff);
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid rgba(255, 255, 255, 1);
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    user-select: none;
    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    };
    
    
    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }

    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`


const MeetAnExpertButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: var(--Secondary-C4, #fff);
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #4597F9;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    width: 160px;
    background-color: #4597F9;
    user-select: none;

    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    };

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }

    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

export const RevertButton = (props) => {
    return <ExploreButton width={props.width} height={props.height} onClick={props.OnClick}>{props.value}</ExploreButton>
}

export const WhiteButton = (props) => {
    return <MeetAnExpertButton width={props.width} height={props.height} onClick={props.OnClick}>{props.value}</MeetAnExpertButton>
}


export const Button = (props)=> {
    console.log("ONCLICK"+props.onClick)
    return <StyledButton width={props.width} height={props.height} onClick={props.OnClick}> {props.value} </StyledButton>
}



const CustomButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    /* background-color: #4597F9; */
    width: 100%;
    height: 40px;
    /* padding: 16px 24px; */
    font: 400 14px/150% Poppins, sans-serif;
    /* border: 1px solid black; */
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 100%;
        height: 40px;
    }

    /* &::before {
        content: "Contact Us";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } */

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

export const Butn =(props)=>{
    return(<CustomButton onClick={props.onClick}>{props.children}</CustomButton>)
}