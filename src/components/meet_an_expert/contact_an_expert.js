import React from "react"
import styled from "styled-components"



const Container  = styled.div`
    display: flex;
    flex-direction: column;
    gap:50px;
    border-radius: 16px;
    align-items: center;
    @media (max-width:600px){
      width: 100%;
      gap:10px;
      font: 400 12px/150% Poppins, sans-serif;
    }
`

const Button = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    width: 250px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    background-color: #1B1E1E;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    @media (max-width:600px){
      width: 75%;
      height: 53px;
      margin: 0px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
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

export const ContactAnExpert = (props) => {
    return (<Container>
                <Button onClick={()=>props.handleOnClick('overlay2')}> Schedule a Phone call</Button>
                <Button onClick={()=>props.handleOnClick('overlay3')}> Send us a message</Button>
                <Button onClick={props.handleOnClick}> Give us a call</Button>
            </Container>)
}