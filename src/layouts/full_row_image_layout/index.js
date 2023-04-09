import styled from "styled-components"
import { Image } from "../../elements/image"
import React from "react"


const FullRowImageContainer = styled.div`
    width:100%;
    height:"630px";
    margin-top: 100px;
    @media (max-width:600px) {
        margin-top: 20px;
    }
`

export const FullImageLayout = (props) => {
    return(
        <>
            <FullRowImageContainer>
                <Image src={props.image} width="100%" height="100%"/>
            </FullRowImageContainer>
        </>
    )
}