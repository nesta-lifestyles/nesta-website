import styled from "styled-components"
import React from 'react';
import { Link } from "react-router-dom";

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
const StyledLink = styled(Link)`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    background: #1B1E1E;
    color: white;
    border-radius: 8px;
    outline: none;
    outline-style: none;
    border-style: none;
    cursor: pointer;
    text-decoration: none;
    justify-self: center;
    
    text-align: end;
    justify-content: end;
`

const StyledRevertButton = styled.button`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    background: #F5F5F5;
    cursor: auto;
    border: none;
    color: black;
    border-radius: 8px;
`

export const Button = (props)=> {
    return <StyledButton  width={props.width} height={props.height} onClick={props.OnClick}> {props.value} </StyledButton>
}

export const LinkAsButton = (props)=> {
    return <StyledLink to="/get-nested"  width={props.width} height={props.height} onClick={props.OnClick}> <StyledButton>{props.value}</StyledButton> </StyledLink>
}

export const RevertButton = (props)=> {
    return <StyledRevertButton  width={props.width} height={props.height} onClick={props.OnClick}> {props.value} </StyledRevertButton>
}
