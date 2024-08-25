import styled from "styled-components"
import { ContactUs } from "../../components/contact_us"
import React, { useContext } from "react"
import { H2 } from "../../elements/text"
import { FormContext } from "./form_context"
import { CancelXButtonRounded } from "../../elements/button/cancel_x_button"
import { SuccessLayout } from "../../layouts/form_layout/success_layout"


const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
    overflow: auto;
`


const Container4 = styled.div`
    position: relative;
    margin: auto;
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 50px;
`

const Container2 = styled.div`
    position: relative;
    margin: auto;
    margin-top: 10%;
    width: 850px;
    padding: 20px;
    background-color: white;
    border-radius: 16px;  
    text-align: center;
    overflow: scroll;
    display: flex;
    gap: 20px;
    flex-direction: column;
    @media(max-width:600px) {
        width: 90%;
        padding: 10px;
        gap: 10px;
        margin: 0px;
    }
`

const Container3 = styled.div`
    text-align: center;

`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #878383;
`


export const SendUsAMessage = (props) => {
    const { isSuccess}= useContext(FormContext) 

    const handleCancelButton =()=> {
        console.log("Cancel button clicked...!!")
        var cancelButton = document.getElementById("overlay_container")
        if(cancelButton){
            cancelButton.style.display="none";
            props.updateOverlayState()
        }
    }

    return(<Container id="overlay_container">
            <Container4>
            <Container2>
            <CancelXButtonRounded onClick={handleCancelButton}/>
            {!isSuccess && <Container3>
                    <H2 height="40px"  width="100%">Send Us A Message</H2>
                </Container3>}
                {!isSuccess && <Divider/>}
                {!isSuccess &&  <ContactUs handleCancel={handleCancelButton}/>}
                {isSuccess &&  <SuccessLayout />}
            </Container2>
            </Container4>
          </Container>)
}