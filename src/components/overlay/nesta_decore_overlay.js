import React, { useContext } from "react"
import { RequestForQuote } from "../contact_us"
import { NestaDecorOverlayScreenContext } from "../../pages/nesta_decor/decor_overlay_context"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Overlay } from "react-bootstrap"
import { FormContext } from "../../pages/contact_us/form_context"
import { OverlayContainer } from "../../pages/contact_an_expert"
import { H2 } from "../../elements/text"
import styled from "styled-components"
import { SuccessLayout } from "../../layouts/form_layout/success_layout"
import { CancelXButtonRounded } from "../../elements/button/cancel_x_button"

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
    text-align: start;

`
const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #878383;
`

export const NestaDecorOverlayScreen = () => {
    const {isRFQVisible, updateRequestForQuote} = useContext(NestaDecorOverlayScreenContext)
    if(isRFQVisible){document.body.classList.add('no-scroll')}
    const { isSuccess, updateFormSuccess}= useContext(FormContext)

    const handleCancelOverlay =()=>{
        updateRequestForQuote(false)
        document.body.classList.remove('no-scroll')
        updateFormSuccess(false)
    }

    return(<TransitionGroup>
            {isRFQVisible && (
                
                <CSSTransition
                    key="overlay1"
                    timeout={500}
                    classNames="overlay"
                >
                    <Overlay show={isRFQVisible} placement="auto" transition={true}>
                            <OverlayContainer>
                            <Container4>
                            <Container2>
                                <CancelXButtonRounded onClick={handleCancelOverlay}/>
                                {!isSuccess && <Container3>
                                    <H2  height="100%" width="100%" color="#878383">Request a quote</H2>
                                </Container3>}
                                {!isSuccess &&  <Divider/>}
                                {!isSuccess &&  <RequestForQuote handleCancel={handleCancelOverlay}/>  }
                                {isSuccess && <SuccessLayout />}
                            </Container2>
                            </Container4>                         
                            </OverlayContainer>
                    </Overlay>
                </CSSTransition>
            )}
        </TransitionGroup>)
}