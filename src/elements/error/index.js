import styled from "styled-components"
import alertImage from "../../images/icons/alert-circle.svg"
import React from "react"

const AlertTag = styled.div`
    width: 20px;
    height: 20px;
    background-image:url(${alertImage});
    background: url(${alertImage});
    background-size:100% auto;
    background-repeat: no-repeat;
    background-position: center;    
    vertical-align: middle;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
    margin-top: 5px;
`


const StyledText =  styled.p`
    width: ${props => props.width ===undefined?"279px":props.width};
    height: ${props => props.height ===undefined?"216px":props.height};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    line-height: 21px;
    text-align: start;
    margin: 0px;
    color: ${props => props.color ===undefined?"#D61B26":props.color};;
    @media (max-width: 600px) {
      width: ${props => props.width ===undefined?"479px":props.width};
      height: auto;
      font-weight: 400;
      font-size: 16px;
    }
    `


export const ErrorText = (props) => {
        return (
            <Container>
                <AlertTag/>
                <StyledText width={props.width} height={props.height}>{props.value}</StyledText>
            </Container>
        )
}