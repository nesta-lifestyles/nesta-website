import React, { useContext } from "react"
import styled from "styled-components"
import { Text } from "../../elements/text"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context"



const RowFlex = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color:#D6D6D6;
`

export const TotalCartItemsLayout = () => {
    const {getTotalCount} = useContext(NestaDecorCartContext)

    return(<RowFlex>
                <Text color="#D6D6D6" width="100%" height="auto"> Total Items</Text>
                <Text color="#D6D6D6" width="20px" height="auto">{getTotalCount()}</Text>
            </RowFlex>)
}