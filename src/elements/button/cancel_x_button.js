import { Image } from "../image"
import cancelIcon from "../../images/icons/x.png"
import React from "react"
import styled from "styled-components"

const Button = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 50%;
    color: black;
    width: 34px;
    padding: 5px;
    height: 34px;
    font: 400 14px/150% Poppins, sans-serif;
    background-color: white;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    @media (max-width: 991px) {
        padding: 0 20px;
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        background-color: white;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

export const CancelXButtonRounded =(props) =>{
    return(<Button id="cancel_button" onClick={props.onClick}>
            <Image width="24px" height="24px" src={cancelIcon} handleOnClick={props.onClick}/>
        </Button>)
}
