import styled from "styled-components"
import { Image } from "../../elements/image"
import { H1, Text } from "../../elements/text"
import React from "react"
import { LocalCarousel } from "../../components/carasoule"

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 46px;
    margin-top: 62px;
`

const TextImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 20px;
`

const TextContainer =  styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;

`




export const Layout3 = (props) => {
    return(<>
            <MainContainer>
                <LocalCarousel width="764px" height="670px" data={props.carousel_data} />
                <TextImageContainer> 
                      <TextContainer>
                        <H1 width="486px" height="92px" color={props.color} value={props.header} />
                        <Text width="478px" height="96px" color={props.color} value={props.value} />
                    </TextContainer>
                    <Image width="478px" height="386px" src={props.small_image} />
                </TextImageContainer>
            </MainContainer>
    </>)
}