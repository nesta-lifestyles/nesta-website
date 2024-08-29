import React, { useState } from "react"
import styled from "styled-components"
import { SmallText } from "../../elements/text"
import { InputTextBoxEmail } from "../../elements/form"
import { ContactUs, SubscribeButton } from "../../elements/button/know_more"
import tickImage from "../../images/icons/tick.svg"
import { Image } from "../../elements/image"
import { ErrorText } from "../../elements/error"
import { validateEmail } from "../../handlers/form_validation_handlers"

const Container = styled.div`
    position: relative;
    width: 300px;
    height: auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
    text-align: left;
    /* margin-right:15px; */
    @media (max-width: 991px) {
        width: 100%;
        /* margin-right:15px; */
    }
`

const SubscriberContainer = styled.div`
    background-color:#767676;
    display: flex;
    flex-direction: row;
    height: 20px;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    opacity: 0.5;
`

const SuccessContainer = styled.div`
    height: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    gap: 5px;
`


export const RightCornerLayout = () => {
    const [isSubscribed, updateSubscribed] = useState(false);
    const [isError, updateError] = useState(false);
    const [errorMessage, updateErrorMessage] = useState(false);
    
    const [email, updateEmail] = useState("");
    
    const onEmailChange = (e) => {
        updateEmail(e.target.value);
    }

    const handleSubscribeButton = ()=> {
        const error = validateEmail(email)
        if(!error) {
            updateError(false); 
            updateSubscribed(true) 
            return   
        } 
        updateErrorMessage(error)
        updateError(true); 
    }


    return(<Container>
            <div>
                <SmallText width="100%" color="white" height="24px" >Any Questions?</SmallText>
                <ContactUs />
            </div>
            <div>
                <SmallText width="100%" color="white" height="24px" >Leave Your Email To Stay Informed. </SmallText>
                <SubscriberContainer>
                    <InputTextBoxEmail placeholder="name@example.com" onChange={onEmailChange} disabled={isSubscribed}/>
                    <SubscribeButton  onClick={handleSubscribeButton} />
                </SubscriberContainer>
                {isSubscribed &&<SuccessContainer>
                    <Image src={tickImage} height="12px" width="12px"></Image>
                    <SmallText width="100%" color="#006400" height="24px">You've subscribed to Nesta updates.</SmallText>
                </SuccessContainer>}
                {isError &&<SuccessContainer>
                    <ErrorText value={errorMessage} width="100%" height="24px" />
                </SuccessContainer>}
            </div>
    </Container>)
}