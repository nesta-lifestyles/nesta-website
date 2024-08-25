import React from "react";
import styled from "styled-components";


const RectangleActiveIndicator = styled.div`
    width: 92px;
    height: 2px;
    border-radius: 30px;
    background-color: #FFFFFF;
    cursor: pointer;
`

const RectangleIndicator = styled.div`
    width: 92px;
    height: 2px;
    border-radius: 30px;
    opacity: 38%;
    background-color: #FFFFFF;
    cursor: pointer;
`


export const RectangleStyledIndicator = (props) => {
    return <RectangleIndicator onClick={props.onClick}></RectangleIndicator>
}


export const RectangleStyledActiveIndicator = (props) => {
    return <RectangleActiveIndicator onClick={props.onClick}></RectangleActiveIndicator>
}

