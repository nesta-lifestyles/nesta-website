import styled from "styled-components"
import React from 'react';

const StyledImage = styled.img`
    display: block;
    transition: transform .4s;
    width: ${props => props.width === undefined? "661px;" : props.width}; 
    height: ${props => props.height === undefined? "599px;" : props.height};
    max-width: ${props => props.width === undefined? "661px;" : props.width}; 
    max-height: ${props => props.height === undefined? "599px;" : props.height};
    pointer-events: none;
    /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`

const StyledDiv = styled.div`
    ${console.log("Called inside the styled DIV TAG")}
    width: ${props => props.width === undefined? "661px;" : props.width}; 
    height: ${props => props.height === undefined? "599px;" : props.height};
    max-width: ${props => props.width === undefined? "661px;" : props.width}; 
    max-height: ${props => props.height === undefined? "599px;" : props.height};
    display: inline-block;
    overflow: hidden;   
    border-radius: 16px;
    /* position: absolute; */
`

const ImageNotFound = "Image Not Found!!"

export const Image = (props) => {
    return    (<StyledDiv width={props.width} height={props.height} isTransformOnHover={props.isTransformOnHover} >
                        <StyledImage src={props.src} alt={ImageNotFound} width={props.width} height={props.height}/>
                </StyledDiv>)
}