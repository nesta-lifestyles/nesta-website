import { H1, H2, Text } from "../../elements/text"
import React from 'react';
import styled from "styled-components";
import { Image } from "../../elements/image";

const ImageTextTag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 52px;
    width: 100%;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bg_color === undefined?"white":"#F5F5F5"};
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        margin-top: 0px;
        gap: 20px;
        padding-bottom: 50px;
    }
` 
const ImageContainer = styled.div`
    width:100%;
    height:396px;
    max-width: 100%;
    max-height: 396px;
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        order: 0 ;
        max-height: 315px;
        height: 315px;
    }
`
const TextContainer = styled.div`
    width:639px;
    height:auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: start;
    justify-content: start;
    @media (max-width:600px){
        width:100%;
        order: 1;
        gap: 1px;
        text-align: left;
    }
`

const Text2Container = styled.div`
    width:300px;
    height:auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: start;
    justify-content: start;
    @media (max-width:600px){
        order: 1;
        gap: 0px;
    }
`

export const TextImageLayout = (props) => {
    return(
        <>
        <ImageTextTag bg_color={props.bg_color}>
                <TextContainer >
                    <Text>{props.text} </Text>
                </TextContainer>
                <ImageContainer>
                    <Image src={props.image} width="100%" height="100%"/>
                </ImageContainer>
        </ImageTextTag>
        </>
    )
}

export const TextWithTitleImageLayout = (props) => {
    return(
        <>
        <ImageTextTag bg_color={props.bg_color}>
                <TextContainer >
                      <H1 value={props.title} color="black" width= "100%" height="auto"></H1>
                      <Text width= "100%" height="100%">{props.text} </Text>
                </TextContainer>
                <ImageContainer>
                    <Image src={props.image} width="100%" height="396px"/>
                </ImageContainer>
        </ImageTextTag>
        </>
    )
}

export const TitleWithTextLayout = (props) =>{
    return(<Text2Container>
            <H2 color="black" width= "300px" height="auto" weight="700">{props.title} </H2>
                <Text width="100%" height="100%">{props.text} </Text>
            </Text2Container>)
}