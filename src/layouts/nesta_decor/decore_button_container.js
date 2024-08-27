import React, { useContext } from "react";
import { AddToCartButton, AddToCartRounded, RequestForQuoteButton, RequestForQuoteRounded, RoundedButton } from "../../elements/button/nesta_decor_button"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context";
import styled from "styled-components";
import { Text } from "../../elements/text";
import { useRFQHandler } from "../../handlers/nesta_decor_RFQ_handlers";


const ButtonContainer1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
`

const PlusMinusButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: auto;
    text-align: center;
    justify-content: space-between;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    text-align: center;
`


export const ButtonContainerRounded = (props) => {
    const { showRFQScreen} = useRFQHandler();
    const { cart, addToCart, removeFromCart} = useContext(NestaDecorCartContext);
    // const [count, setCount] = useState(getCountOf(props.decorItem))
    
    const handleAddToCart = (decorItem) => {
        addToCart(decorItem);
        // setCount(getCountOf(decorItem))
    }

    const handleRemoveFromCart = (decorItem) => {
        removeFromCart(decorItem);
        // setCount(getCountOf(decorItem))
    }

    const getCount = () => {
        if(cart.get(props.decorItem.code)) {
            // console.log("LET THE GET COUNT ", cart.get(props.decorItem.code))
            return cart.get(props.decorItem.code).count
        }
        return 0
    }
    

    const handleRequestQuotes = () => {
        showRFQScreen();
    }


    return(<ButtonContainer1>
         {getCount() ===0 && <AddToCartRounded id="add_to_cart_button" onClick={() => handleAddToCart(props.decorItem) }/>}
         {getCount() !==0 && <PlusMinusButtonContainer id="plus_or_minus_button">
                        <RoundedButton onClick={() => handleRemoveFromCart(props.decorItem)}>-</RoundedButton>
                        <TextContainer>
                            <Text  width="30px" height="20px">{getCount()}</Text>
                        </TextContainer>
                        <RoundedButton onClick={() => handleAddToCart(props.decorItem)}>+</RoundedButton>
                    </PlusMinusButtonContainer>}
        <RequestForQuoteRounded  onClick={() =>handleRequestQuotes()}/>
    </ButtonContainer1>)
}


export const ButtonContainer = (props) => {
    const { showRFQScreen} = useRFQHandler();
    const {  getCountOf, updateToCart} = useContext(NestaDecorCartContext);

    const handleAddToCart = (decorItem, count) => {
        //addToCart(decorItem);
        updateToCart(decorItem, count)
    }

    const shouldWeShow = (decorItem) => {
        if(getCountOf(decorItem)===0) {
            return true
        }
        return false
    }
    

    const handleRequestQuotes = () => {
        showRFQScreen();
    }



   
    const RowContainer = styled.div`
        display: flex;
        width: 160px;
        height: 60px;
        gap: 5px;
        background-color: #F5F5F5;
        /* justify-content: center; */
        align-items: center;
        /* text-align: center; */
        padding: 16px 24px;
        border-radius: 8px;
        @media (max-width: 600px) {
           width: 100%;
        }
    `

    const SelectTag = styled.select`
        /* padding: 5px; */
        border: none;
        background-color: #F5F5F5;
        font-size: 16px;
        width: 100px;
    `


    return(<ButtonContainer1>
        {shouldWeShow(props.decorItem) && <AddToCartButton id="add_to_cart_button" onClick={() => handleAddToCart(props.decorItem, 1) }/>}
        {!shouldWeShow(props.decorItem) && 
        <PlusMinusButtonContainer id="plus_or_minus_button">   
            <RowContainer>
                <Text width="100%" height="100%"> Qty: </Text>
                <SelectTag id={`quantity-${props.decorItem.code}`} value={getCountOf(props.decorItem)} onChange={(e) => handleAddToCart(props.decorItem, parseInt(e.target.value, 10))}>
                <option key={0} value={0}>
                            0
                        </option>
                    {Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </SelectTag>
            </RowContainer>
        </PlusMinusButtonContainer>}
        <RequestForQuoteButton  onClick={() =>handleRequestQuotes()}/>
    </ButtonContainer1>)
}