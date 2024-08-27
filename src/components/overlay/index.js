import React, { useState } from "react"
import { Overlay } from "react-bootstrap"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { ContactAnExpertPage } from "../../pages/contact_an_expert"
import { ScheduleCallAgent } from "../../pages/contact_us/schedule_call"
import { SendUsAMessage } from "../../pages/contact_us/send_us_message"
import { useDispatch, useSelector } from "react-redux"
import { closeOverlay } from "./overlay_reducer"
import { FormContextProvider } from "../../pages/contact_us/form_context"

export const OverlayScreen = () => {
    const showOverlay = useSelector(state=>state.showOverlayState.isShowOverlay)
    const[currentOverlay, updateCurrentOverlay] = useState("overlay1")

    
    // const onSubmit = (data) => {
    //     console.log("ON-SUBMIT Data:-"+JSON.stringify(data))
    // }

    // const onClosed = () => {
    //     console.log("ON-CLOSED ")
    // }

    const switchOverlay = (overlay) => {
        window.history.pushState(null, null, `#some`);
        // updateOverlay(false)
        updateCurrentOverlay(overlay)
        // this.setState({ 
        //     currentOverlay: overlay
        // })
    };

    

    // const updateOverlayState = () => {
    //     console.log("Before us clicked..."+showOverlay)
    //     // updateOverlay(!showOverlay)
    //     updateCurrentOverlay('overlay1')
    //     // this.setState({ 
    //     //     showOverlay: !this.state.showOverlay,
    //     //     currentOverlay:'overlay1'
    //     // })
       
    // }
    const dispatch = useDispatch();

    const contactUsHandler = (props) => {
       updateCurrentOverlay("overlay1")
       dispatch(closeOverlay());
       if(!showOverlay){
               document.body.classList.add('no-scroll')
       } else {
           document.body.classList.remove('no-scroll')
       }
   }

    return(       
                 
    <TransitionGroup>
        {currentOverlay === 'overlay1' && (
            
            <CSSTransition
                key="overlay1"
                timeout={500}
                classNames="overlay"
            >
                <Overlay show={showOverlay} placement="auto" transition={true}>
                    <ContactAnExpertPage  updateOverlayState={contactUsHandler} onSwitch={switchOverlay}/>
                </Overlay>
            </CSSTransition>
        )}

        {currentOverlay === 'overlay2' && (
            <CSSTransition
                key="overlay2"
                timeout={500}
                classNames="overlay"
            >
            <Overlay show={showOverlay} placement="auto" transition={true}>
                {/* <ContactAnExpertPage  updateOverlayState={contactUsHandler}/> */}
                <FormContextProvider>
                    <ScheduleCallAgent  updateOverlayState={contactUsHandler}/>
                </FormContextProvider>
            </Overlay>
            </CSSTransition>)}
        
            {currentOverlay === 'overlay3' && (
            <CSSTransition
                key="overlay3"
                timeout={500}
                classNames="overlay"
            >
            <Overlay show={showOverlay} placement="auto" transition={true}>
                {/* <ContactAnExpertPage  updateOverlayState={contactUsHandler}/> */}
                <FormContextProvider>
                    <SendUsAMessage  updateOverlayState={contactUsHandler}/>
                </FormContextProvider>
            </Overlay>
            </CSSTransition>)}
            </TransitionGroup>
            )
}