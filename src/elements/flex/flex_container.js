import React from "react"
import styled from "styled-components"



const RowFlexContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 100%;
    gap:${props => props.gap  === undefined?"0px":props.gap};
    justify-content: space-between;
`

export const RowFlex = (props) =>{
    return(<RowFlexContainer gap={props.gap} style={props.style}>{props.children}</RowFlexContainer>)
}

const ColumnFlexContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    gap:${props => props.gap  === undefined?"0px":props.gap};
    @media (max-width:600px) {
        gap:${props => props.gap  === undefined?"0px":"5px"};
    }
`

export const ColumnFlex = (props) =>{
    return(<ColumnFlexContainer gap={props.gap}>{props.children}</ColumnFlexContainer>)
}