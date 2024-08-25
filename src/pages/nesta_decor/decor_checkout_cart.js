import React from "react"
import { CartCheckout } from "../../components/nesta_decor/decor_cart_checkout"
import styled from "styled-components"
import { MainContainerDiv } from "../../App"
import { H2 } from "../../elements/text"



const Container = styled.div`
/* margin-left: 70px;
margin-right: 73px; */
/* margin-top: 105px; */
padding: 70px;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 16px;
text-align: left;
@media (max-width:600px){
  padding:20px;
  background-color: white;
} 
`

export const NestaDecorCartCheckout = ()=>{
    return(<MainContainerDiv>
            <Container>
                <H2 width="50%" height="40px">Cart</H2>
                <CartCheckout/>
            </Container>
        </MainContainerDiv>)
}