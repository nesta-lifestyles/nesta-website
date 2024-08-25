import React from "react";
import styled from "styled-components";

export const AddToCartRounded = styled.div`
    border-radius: 40px;
    color: #1B1E1E;
    background-color: #F5F5F5;
    width: 160px;
    height: 40px;
    align-items: center;
    padding: 10px 5px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #F5F5F5;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    /* margin-top: 30px; */
    user-select: none;
    
    @media (max-width: 991px) {
        width: 100%;
        height: 40px;
        padding: 10px 5px;
        /* margin-top: 15px; */
    }

    &::before {
        content: "Add to cart";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

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

const ButtonRounded = styled.div`
    border-radius: 40px;
    color: #1B1E1E;
    background-color: #F5F5F5;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 10px;
    padding-left: 25px;
    padding-right: 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #F5F5F5;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    /* margin-top: 30px; */
    user-select: none;
    
    @media (max-width: 991px) {
        width: 100px;
        height: 40px;
        padding: 10px 5px;
    }

    /* &::before {
        content: "Add to cart";
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

export const RoundedButton=(props)=> {
    return(
        <ButtonRounded style={props.style} onClick={props.onClick}>{props.children}</ButtonRounded>
    )
}


const ButtonStyled = styled.div`
    border-radius: 8px;
    color: #1B1E1E;
    background-color: #F5F5F5;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 10px;
    padding-left: 25px;
    padding-right: 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #F5F5F5;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    /* margin-top: 30px; */
    user-select: none;
    
    @media (max-width: 991px) {
        width: 100px;
        height: 30px;
        padding: 5px 5px;
        margin-top: 15px;
    }

    /* &::before {
        content: "Add to cart";
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
export const Button=(props)=> {
    return(
        <ButtonStyled style={props.style} onClick={props.onClick}>{props.children}</ButtonStyled>
    )
}




export const RequestForQuoteRounded = styled.div`
    border-radius: 40px;
    color: white;
    background-color: #1B1E1E;
    width: 160px;
    height: 40px;
    align-items: center;
    padding: 10px 5px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #1B1E1E;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    /* margin-top: 30px; */
    user-select: none;
    
    @media (max-width: 991px) {
        width: 100%;
        height: 40px;
        padding: 10px 5px;
        /* margin-top: 15px; */
    }

    &::before {
        content: "Request Quote";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

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

export const AddToCartButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: black;
    width: 100%;
    height: auto;
    padding: 16px 24px;
    background-color: #F5F5F5;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #F5F5F5;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width:600px){
      width: 100%;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    }
    
   &::before {
        content: "Add to cart";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

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
export const RequestForQuoteButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    background-color: #1B1E1E;
    width: 100%;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #1B1E1E;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width:600px){
      width: 100%;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    }
    
   &::before {
        content: "Request Quote";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

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