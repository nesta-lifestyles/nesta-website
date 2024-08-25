import React from "react"
import styled from "styled-components"

const HeartIconContainer = styled.div`
    background-color: ${props => props.background_color  === undefined?"white":props.background_color};
    height: 54px;
    width: 54px;
    margin: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
`

export const HeartButton = (props) => {
        return(<HeartIconContainer background_color={props.background_color}>
            {/* <Image src={heartImage} height="24px" width="24px"/> */}
            </HeartIconContainer>)
}