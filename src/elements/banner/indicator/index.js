import styled from "styled-components"
import { NextIndicator } from "../next_indicator"
import { PrevIndicator } from "../prev_indicator"
import React from 'react';
import { RectangleStyledActiveIndicator, RectangleStyledIndicator } from "../rectangle_indicator";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 49px;
    justify-content: center;
    @media (max-width:600px){
        gap: 15px;
    }
`
const StyledRectangleIndicatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    @media (max-width:600px){
        gap: 15px;
    }
`


export const Indicator = (props) => {
    return <StyledDiv>
                <PrevIndicator onClick={props.OnPrevIndicatorClick}/>
                <NextIndicator onClick={props.onNextIndicatorClick}/>
           </StyledDiv>
}


export const RectangleIndicator = (props) => {
    return  <StyledRectangleIndicatorContainer>
                <RectangleStyledActiveIndicator />
                <RectangleStyledIndicator />
                <RectangleStyledIndicator />
            </StyledRectangleIndicatorContainer>

}