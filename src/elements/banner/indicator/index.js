import styled from "styled-components"
import { NextIndicator } from "../next_indicator"
import { PrevIndicator } from "../prev_indicator"
import React from 'react';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 49px;
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