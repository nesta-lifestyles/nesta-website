import styled from "styled-components"
import { RequestForQuoteButton } from "../../elements/button/nesta_decor_button"
import { ColumnFlex } from "../../elements/flex/flex_container"
import React, { useContext } from "react"
import { H2, Text } from "../../elements/text"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context"
import { useRFQHandler } from "../../handlers/nesta_decor_RFQ_handlers"

const Container =styled.div`
    display: flex;
    padding: 24px;
    border-radius: 12px;
    text-align: left;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 10%;
    box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
`

export const DecorCartTotalItemsCardLayout = () => {
    const {getTotalCount} = useContext(NestaDecorCartContext)
    const { showRFQScreen} = useRFQHandler();
    const handleRFQ = () =>{
        showRFQScreen();
    }

    return(<Container>
             <ColumnFlex>
                <Text width="100%" height="20px" color="black">Total Items</Text>
                <H2 width="100%" height="40px" color="black">{getTotalCount()}</H2>
                <RequestForQuoteButton onClick={handleRFQ}/>
            </ColumnFlex>
            </Container>)
}
