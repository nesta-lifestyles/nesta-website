import React, { useContext } from "react"
import { DecorCartCheckoutLayout } from "../../layouts/nesta_decor/decor_cart_list_view_layout"
import styled from "styled-components"
import { DecorCartTotalItemsCardLayout } from "../../layouts/nesta_decor/decor_cart_total_items_card_layout"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context"
import { Text } from "../../elements/text"


const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    
`

const CheckoutItemContainer = styled.div`
    width: 40%;
    @media (max-width:600px){
        width: 100%;
    }
`


const TotalItemsContainer = styled.div`
    position: relative;
    width: 50%;   
    @media (max-width:600px){
       display: none;
    } 
`


export const CartCheckout = () => {
    const {getTotalCount,cartEmptyMessage} = useContext(NestaDecorCartContext)

    return (<Container>
         {getTotalCount()!==0 &&<CheckoutItemContainer>
            <DecorCartCheckoutLayout />
        </CheckoutItemContainer>}
        {getTotalCount()!==0 && <TotalItemsContainer>
        <DecorCartTotalItemsCardLayout/>
        </TotalItemsContainer>}
        {getTotalCount()===0 &&<Text width="100%" height="auto">{cartEmptyMessage}</Text>}
        </Container>)
}