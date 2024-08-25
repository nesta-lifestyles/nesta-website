import React from "react"
import styled from "styled-components"
import { H1, SmallText, Text } from "../../elements/text"

const  SliderContainer = styled.div`
        width: 394px;
        height: 614px;
        border: 1px;
        background-color: white;
        border-radius: 24px;
        padding: 30px;
`

const StyledLi = styled.li`
    align-items: center;
    color: white;
    position: relative;
    text-align: center;
`


const ImageContainer  = styled.div`
        width: 333px;
        height: 306px;
        border-radius: 12px;
        background-color: gray;

`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 333px;
    height: 214px;
    gap: 12px;
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: start;
    text-align: start;

`

const text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum has been the industry's standard dummy."

export class Slide extends React.Component {

    render(){
            return(<StyledLi>
                        <SliderContainer>
                                <ImageContainer>
                                </ImageContainer>
                                <TextContainer>
                                    <NameContainer>
                                        <H1 value="Naman Thakur" width="337px" height="36px" />
                                        <SmallText value="Manager At Google Pay" width="337px" height="21px"/>
                                    </NameContainer>
                                    <Text value={text} width="337px" height="214px"/>
                                </TextContainer>
                        </SliderContainer>
                    </StyledLi>
                   )
    }
}