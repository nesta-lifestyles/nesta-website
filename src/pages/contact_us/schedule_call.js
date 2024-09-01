import styled from "styled-components"
import { ContactUs } from "../../components/contact_us"
import React, { useContext } from "react"
import { H2 } from "../../elements/text"
import { FormContext } from "./form_context"
import { SuccessLayout } from "../../layouts/form_layout/success_layout"
import { CancelXButtonRounded } from "../../elements/button/cancel_x_button"


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
    padding-right: 30px;
    padding-bottom: 50px;
    @media(max-width:600px) {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
    }
`

const Container2 = styled.div`
    position: relative;
    margin: auto;
    margin-top: 10%;
    width: 880px;
    padding: 40px;
    background-color: white;
    border-radius: 16px;  
    text-align: center;
    overflow: scroll;
    z-index: 1;
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
    text-align: start;

`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #878383;
`


export const ScheduleCallAgent = (props) => {
   const { isSuccess}= useContext(FormContext) 
    const handleCancelButton =()=> {
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
                {!isSuccess &&     <Container3>
                        <H2  height="100%" width="100%" color="#878383">Book a 15 minute phone call</H2>
                    </Container3>}
                    {!isSuccess &&     <Divider/>}
                    {/* <FormContextProvider> */}
                    {!isSuccess &&        <ContactUs handleCancel={handleCancelButton}/>}
                    {/* </FormContextProvider> */}
                {isSuccess && <SuccessLayout />}
            </Container2>
         
            </Container4>
          </Container>)
}