import styled from "styled-components"
import { RoundedButton } from "../../elements/button/nesta_decor_button"
import React, {  useState } from "react"
import { DecorCartComponent } from "../../components/nesta_decor/decor_cart"

const RowFlexContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`

const LeftRowFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    gap: 12px;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: 80px;
    }
`

const RightRowFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

const Container  = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    gap: 12px;
`

export const DecorItemListFilterLayout = (props) => {
    const normalStyle  = {backgroundColor:"#F5F5F5", color:"#1B1E1E", borderColor:"#F5F5F5"}
    const onClickStyle = {backgroundColor:"#1B1E1E", color:"white", borderColor:"#1B1E1E"}
    
    let buttonStyle = {
        "Decor":normalStyle,
        "Furniture":normalStyle,
        "All":onClickStyle,
    }

    const [buttonColor, updateButtonStyle] = useState(buttonStyle);

    const handleFilerButton = (filterType) => {
        props.updateDecoreItemsByFilter(filterType)
        buttonStyle.All=normalStyle
        buttonStyle[filterType] = onClickStyle
        updateButtonStyle(buttonStyle)
    }

    
   
    return (<RowFlexContainer>
        <LeftRowFlexContainer>
            <RoundedButton style={buttonColor.All} onClick={()=>handleFilerButton("All")}> All </RoundedButton>
            <Container>
                <RoundedButton style={buttonColor.Decor} onClick={()=>handleFilerButton("Decor")}> Decor </RoundedButton>
                <RoundedButton style={buttonColor.Furniture} onClick={()=>handleFilerButton("Furniture")}> Furniture </RoundedButton>
            </Container>
        </LeftRowFlexContainer>
        <RightRowFlexContainer>        
        <DecorCartComponent />
        </RightRowFlexContainer>
    </RowFlexContainer>)
}