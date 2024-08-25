import styled from "styled-components"
import { ContactAnExpert } from "../../components/meet_an_expert/contact_an_expert"
import React from "react"
import { H2 } from "../../elements/text"
import { Image } from "../../elements/image"
import cancelIcon from "../../images/icons/x.png"


const Container2 = styled.div`
    position: relative;
    margin: auto;
    margin-top: 10%;
    width: 400px;
    padding-top: 20px;
    padding-bottom: 60px;
    background-color: white;
    border-radius: 16px;  
    text-align: center;
    @media (max-width:600px){
        width: 75%;
    }
`

const WriteToUsElementGap = styled.div`
    /* position: relative; */
    padding-bottom: 20px;
    justify-content: center;
`

export const OverlayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
    overflow: scroll;
    
`

const Button = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
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

export const ContactAnExpertPage = (props) => {
    const handleCancelButton =()=> {
        var cancelButton = document.getElementById("overlay_container")
        if(cancelButton){
            cancelButton.style.display="none";
            props.updateOverlayState()
        }
    }

    return(
        <OverlayContainer id="overlay_container">
            <Container2>
                <Button onClick={handleCancelButton} id="cancel_button" ><Image width="24px" height="24px" src={cancelIcon}/></Button>
                <WriteToUsElementGap> 
                    <H2 height="40px" width="100%">Contact an Expert</H2>
                </WriteToUsElementGap>
                <ContactAnExpert handleOnClick={props.onSwitch}/>
            </Container2>
        </OverlayContainer>
        )
}