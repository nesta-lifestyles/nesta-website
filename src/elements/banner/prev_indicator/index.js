import styled from "styled-components"
import prevImage from './Vector.png'
import React from 'react';

const StyledDiv = styled.div`
    display:flex;
    justify-content: center;
    width: 70px;
    max-width: 70px;
    max-height: 70px;
    height: 70px;
    background: #FFFFFF;
    align-items: center;
    cursor: pointer;
    border-radius: 80px;
    transition: 0.35s;
    opacity: 0.4;
    transform: scale(1);
    @media (max-width:600px){
        width: 50px;
        max-width: 50px;
        max-height: 50px;
        height: 50px;
    }
    &:hover{
        /* -webkit-box-shadow: 0 0 1px 3px #000 inset;
        -moz-box-shadow: 0 0 1px 3px #000 inset;
        box-shadow: 0 0 1px 3px black inset; */
        transition: 0.35s;
        opacity: 1.0;
        transform: scale(0.9);
    }
`
const StyledAnchor = styled.img`
    position: relative;
    width: 12px;
    max-width: 12px;
    max-height: 24px;;
    height: 24px;
    background: #FFFFFF;
    cursor: pointer;
    border-radius: 80px;
`

export const PrevIndicator = (props) => {
    return <StyledDiv onClick={props.onClick}><StyledAnchor src={prevImage}></StyledAnchor></StyledDiv>
}