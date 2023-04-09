import { H1, Text } from "../../elements/text"
import React from 'react';
import styled from "styled-components";
import { Image } from "../../elements/image";

const ImageTextTag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 52px;
    margin-top: 100px;
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        gap: 10px;
    }
` 
const ImageContainer = styled.div`
    width:"729px";
    height:"567px";
    flex:1;
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
    }
`
const TextContainer = styled.div`
    width:"729px";
    height:"567px";
    flex:1;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media (max-width:600px){
        width:"100%";
        height:"100%";
    }
`

export const ImageTextLayout = (props) => {
    return(
        <>
        <ImageTextTag>
                <ImageContainer>
                    <Image src={props.image} width="100%" height="100%"/>
                </ImageContainer>
                <TextContainer>
                    <Text value={props.text} />
                </TextContainer>
        </ImageTextTag>
        </>
    )
}