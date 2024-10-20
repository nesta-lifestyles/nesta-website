import styled from "styled-components"
import { ExploreButton, ExploreWhiteButton } from "../../elements/button/know_more"
import React from "react"
import images from "../../images/designs/nesta_design_100/gallery_br_1_1.avif"
import imagesVille from "../../images/ville/200/banner_1.avif"
import imagesDecor from "../../images/decor/banner.avif"
import { Image } from "../../elements/image"
import { H1, H2, Text } from "../../elements/text"


const Container = styled.div`
    width: 100%;
    background-color: ${props => props.bg_color === undefined?"#F5F5F5":"white"};
    position: relative;
    display: flex;
    flex-direction:row;
    gap: 50px;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
    /* background: url(${images}) no-repeat fixed center; 
    background-attachment: scroll;
    background-size: cover;
    background-position: center; */

    /* flex-wrap: wrap; */
`

const TextContainer = styled.div`
    /* position: absolute;
    width: 40%;
    right: 2%;
    top: 10%; */
    margin-left: 5%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    justify-content: center;
    align-items: center;

`

const ButtonContainer = styled.div`
    position: absolute;
    right: 2%;
    bottom: 6%;
`

const ImageContainer = styled.div`
   position: relative;
   width: 300%;
   height: 100%;
   /* width: 100%; */
   @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        gap: 20px;
    }
`   

export const HomePageRowLayout1 = (props) => {
    return(<Container src={images} bg_color={props.bg_color}>
        <ImageContainer> 
            <Image  height="100%" width="100%" src={imagesVille}/>
            <ButtonContainer>
                <ExploreWhiteButton/>
            </ButtonContainer>
        </ImageContainer>
        <TextContainer>
            <H1 height="auto" value="Nestaville" width="100%">
            </H1>
            <Text height="100%" width="100%">
            Discover Nestaville,  where luxury meets sustainability in high-end architectural design. Our collection features eco-friendly spaces crafted with cutting-edge engineering
            </Text>
        </TextContainer>
    </Container>)
}

export const HomePageRowLayout2 = (props) => {
    return(<Container src={images} bg_color={props.bg_color}>
        <TextContainer>
            <H1 height="auto" value="Nesta Design" width="100%">                
            </H1>
            <Text height="100%" width="100%">
            Nesta Designs redefines elegance and functionality with exquisite interior models, blending timeless aesthetics and modern innovation to create artful, comfortable spaces
            </Text>
        </TextContainer>
        <ImageContainer> 
            <Image  height="100%" width="100%" src={images}/>
            <ButtonContainer>
                <ExploreWhiteButton/>
            </ButtonContainer>
        </ImageContainer>
    </Container>)
}


export const HomePageRowLayout3 = (props) => {
    return(<Container src={images} bg_color={props.bg_color}>
        <ImageContainer> 
            <Image  height="100%" width="100%" src={imagesDecor}/>
            <ButtonContainer>
                <ExploreWhiteButton/>
            </ButtonContainer>
        </ImageContainer>
        <TextContainer>
            <H1 height="auto" value="Nesta Decor" width="100%">
            </H1>
            <Text height="100%" width="100%">
                Nesta Decor brings refined elegance to every space, with thoughtfully curated pieces that elevate your interior to a new level of sophistication.
            </Text>
        </TextContainer>
    </Container>)
}
