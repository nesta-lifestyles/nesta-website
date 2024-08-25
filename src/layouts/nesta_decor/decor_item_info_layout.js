import styled from "styled-components"

import React from "react"
import { H2, Text } from "../../elements/text"
import { HeartButton } from "../../elements/button/heart_button"
import { RowFlex } from "../../elements/flex/flex_container"
import { DecorCartComponent } from "../../components/nesta_decor/decor_cart"
import { ButtonContainer } from "./decore_button_container"

const ColumnContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 90px;
    @media (max-width: 600px) {
        gap: 10px;
    }
`


const TextContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    justify-content: left;
    align-items: flex-start;
`

const ButtonsContainer  = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 60%;
    text-align: left;
    justify-content: left;
    align-items: flex-start;
    @media (max-width: 600px) {
        width: 100%;
    }
`



export const DecorItemInforLayout  = (props) => {
    return(<ColumnContainer>
    <TextContainer>
        <RowFlex>
            <HeartButton background_color="white"/>
            <DecorCartComponent />
        </RowFlex>
        <H2 height="40px" width="100%">{props.decorItem.name}</H2>
        <Text height="100%" width="100%">{props.decorItem.information}</Text>
    </TextContainer>
    <ButtonsContainer>
        <ButtonContainer decorItem = {props.decorItem}/>
        {/* <AddToCartButton></AddToCartButton>
        <RequestForQuoteButton></RequestForQuoteButton> */}
    </ButtonsContainer>
    </ColumnContainer>)
}