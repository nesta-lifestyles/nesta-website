import React from "react"
import styled from "styled-components"
import { H2 } from "../../elements/text"
import { Image } from "../../elements/image"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap:150px;
    @media (max-width:600px){
        flex-direction: column-reverse;
        gap:10px;
    } 
`

const ImageContainer = styled.div`
    position: relative;
    width: 519px;
    height: 537px;
    max-width: 519px;
    max-height: 537px;
    @media (max-width:600px){
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        height: 384px;
        max-height: 522px;
        overflow: hidden;
        border-radius: 17px;
    } 
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`

const ListViewContainer = styled.ul` 
`

const ListContainer = styled.li`
    font-size: 16px;
    text-align: left;
    padding-top: 10px;
    @media (max-width: 600px) {
      font-weight: 300;
      font-size: 16px;
    }
`

export const WhyToChooseLayout =(props)=> {
    return(<Container>
        <ImageContainer>
            <Image src={props.image} width="100%" height="100%"/>
        </ImageContainer>
        <TextContainer>
            <H2 color="black" width= "100%" height="auto">{props.title} </H2>
            <ListViewContainer>
                    {props.items.map((item, index) => (
                <ListContainer key={index}>
                    {item}
                </ListContainer>
            ))}
            </ListViewContainer>
        </TextContainer>
    </Container>)
}