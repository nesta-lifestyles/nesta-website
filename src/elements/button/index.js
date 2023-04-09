import styled from "styled-components"
import React from 'react';

const StyledButton = styled.button`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    background: #1B1E1E;
    cursor: auto;
    color: white;
    border-radius: 8px;
`

export const Button = (props)=> {
    return <StyledButton  width={props.width} height={props.height} onClick={props.OnClick}> {props.value} </StyledButton>
}
