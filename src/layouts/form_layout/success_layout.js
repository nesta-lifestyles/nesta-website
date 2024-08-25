import React from "react"
import styled from "styled-components"
import { Image } from "../../elements/image"
import successIcon from "../../images/icons/check-circle.svg"
import { H2, H3 } from "../../elements/text"

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
    align-items: center;
    justify-content: center;
`
const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 150px;
    height: auto;
    max-width: 150px;
    max-height:auto;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`



export const SuccessLayout = () => {
    return(<Container>
            {/* <CancelXButtonRounded /> */}
            <ImageContainer>
                <Image src={successIcon} />
            </ImageContainer>
            <TextContainer>
                <H2 height="auto" width="auto" weight="900">Thank you!!</H2>
                <H3 height="auto" width="auto">Your submission has been sent</H3>
            </TextContainer>
    </Container>)
}