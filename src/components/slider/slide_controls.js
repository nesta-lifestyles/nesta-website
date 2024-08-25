import React from "react"
import styled from "styled-components"
import { Indicator } from "../../elements/banner/indicator"

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 100%;
    justify-content: flex-end;
`



export const Controls = (props) => {
    return(<ControlsContainer>
        <Indicator OnPrevIndicatorClick={props.OnPrevClick} onNextIndicatorClick={props.OnNextClick} />
    {/* <Button value="NEXT" OnClick={props.OnNextClick}/>
    <Button value="PREV" OnClick={props.OnPrevClick}/> */}
    </ControlsContainer>)
}

