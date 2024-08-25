import React from "react"
import styled from "styled-components"
import { SmallText } from "../../elements/text"
import { InputTextBoxEmail } from "../../elements/form"
import { ContactUs, SubscribeButton } from "../../elements/button/know_more"


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
    background-color: #767676;
    display: flex;
    flex-direction: row;
    height: 20px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    opacity: 0.5;
`



export const RightCornerLayout = () => {
    return(<Container>
            <div>
                <SmallText width="100%" color="white" height="24px" >Any Questions?</SmallText>
                <ContactUs />
            </div>
            <div>
                <SmallText width="100%" color="white" height="24px" >Leave Your Email To Stay Informed. </SmallText>
                <SubscriberContainer>
                    <InputTextBoxEmail placeholder="Sample@gmail.com"/>
                    <SubscribeButton />
                </SubscriberContainer>
            </div>
    </Container>)
}