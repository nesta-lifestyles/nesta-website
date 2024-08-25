import styled from "styled-components"
import { SmallText, Text } from "../../elements/text"
import React from "react"
import {  ButtonContainerRounded } from "./decore_button_container"

const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 350px;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const ItemImageContainer = styled.div`
    position: relative;
    height: 350px;
    width: 350px;
    /* flex-basis: 33.33333%; */
    border-radius: 20px;
    background: ${(props) => `url(${props.main})`} no-repeat center center fixed; 
    background-size:100% auto;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment:scroll;
    @media (max-width: 600px) {
        height: 350px;
        width: 100%;
        max-width: 600px;
        min-width: 330px;
    }
`

const HeartIconContainer = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    @media (max-width: 600px) {
        top: 20px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:20px;
    text-align: left;
    margin-bottom: 16px;
    
`

 export const  NestaDecorItem = (props) =>{
    
       return(
            <ItemContainer>
                <ItemImageContainer main={props.decorItem.main_image} onClick={()=>props.handleOnDecoreItemSelected(props.decorItem)}>
                    <HeartIconContainer>
                        {/* <HeartButton background_color="#F5F5F5"/> */}
                    </HeartIconContainer>
                </ItemImageContainer>
                <TextContainer>
                    <Text  color="#1B1E1E" height="20px" width="150px">{props.decorItem.name}</Text>
                    <SmallText  color="#878383" height="20px" width="100px">{props.decorItem.code}</SmallText>
                </TextContainer>
                <ButtonContainerRounded decorItem = {props.decorItem} />
                {/* <ButtonContainer>
                    <AddToCartRounded id="add_to_cart_button" onClick={() => handleAddToCart(props.decorItem) }/>
                    {is2Visible && <PlusMinusButtonContainer id="plus_or_minus_button">
                        <RoundedButton>+</RoundedButton>
                        <div>1</div>
                        <RoundedButton>-</RoundedButton>
                    </PlusMinusButtonContainer>}
                    <RequestForQuoteRounded />
                </ButtonContainer> */}
            </ItemContainer>
        )
}