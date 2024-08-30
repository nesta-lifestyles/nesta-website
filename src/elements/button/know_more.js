import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



export const ExploreButton = styled.div`
    position: relative;
    border-radius: 8px;
    height: auto;
    color: var(--Secondary-C4, #fff);
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid rgba(255, 255, 255, 1);
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    };

    &::before {
        content: "Explore";
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


export const MeetUsButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    width: auto;
    height: auto;
    padding: 16px 24px;
    background-color: #4597F9;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #4597F9;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width:600px){
      width: auto;
      height: 53px;
      text-align: center;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    }

    @media (max-width: 991px) {
      margin-left: 0px;
      /* margin-bottom: 24px;
      margin:0px; */
    }
    
    &::before {
        content: "Meet An Expert";
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



export const KnowMoreButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid white;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    }
    
   &::before {
        content: "Know More";
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

const ContactUsButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    background-color: #4597F9;
    width: 100%;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width: 991px) {
        
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

const ContactUsButtonRounded = styled.div`
    border-radius: 40px;
    color: white;
    background-color: #4597F9;
    width: 169px;
    height: 40px;
    align-items: center;
    padding: 10px 5px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid #4597F9;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    margin-top: 30px;
    user-select: none;
    
    @media (max-width: 991px) {
        width: 100px;
        height: 30px;
        padding: 5px 5px;
        margin-top: 15px;
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
const ContactUsLink = styled(Link)`
    text-decoration: none;
    color: white;
`


export const ContactUs=()=>{
    return(<ContactUsLink to="/contact-us"><ContactUsButton>Contact Us</ContactUsButton></ContactUsLink>)
}

export const ContactUsRounded=()=>{
    return(<ContactUsLink to="/contact-us"><ContactUsButtonRounded>Contact Us</ContactUsButtonRounded></ContactUsLink>)
}



export const SubscribeButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    background-color: black;
    width: 104px;
    height: 100%;
    margin: 5px;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width: 991px) {
        
    }

    &::before {
        content: "Join";
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
        color: white;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`



