import styled from "styled-components"
import React from 'react';

const StyledImage = styled.img`
    display: block;
    transition: transform .4s;
    object-fit: fill;
    width: ${props => props.width === undefined? "100%" : props.width}; 
    height: ${props => props.height === undefined? "100%" : props.height};
    max-width: ${props => props.width === undefined? "100%;" : props.width}; 
    max-height: ${props => props.height === undefined? "100%;" : props.height};
    
     /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`

const StyledCartImage = styled.img`
    display: block;
    transition: transform .4s;
    object-fit: contain;
    width: ${props => props.width === undefined? "100%" : props.width}; 
    height: ${props => props.height === undefined? "100%" : props.height};
    max-width: ${props => props.width === undefined? "100%;" : props.width}; 
    max-height: ${props => props.height === undefined? "100%;" : props.height};
    
     /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`


const StyledDiv = styled.div`
    /* width: ${props => props.width === undefined? "661px;" : props.width}; 
    height: ${props => props.height === undefined? "599px;" : props.height};
    max-width: ${props => props.width === undefined? "661px;" : props.width}; 
    max-height: ${props => props.height === undefined? "599px;" : props.height}; */
    display: inline-block;
    overflow: hidden;   
    border-radius: 16px; 
    
`

const BannerImageContainer = styled.img`
    display: flex;
    transition: transform .4s;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    @media(max-width:600px) {
        height: 600px;
        width: 100%;
    }
    
    /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`


export const SideImage = styled.img`
    display: block;
    transition: transform .4s;
    object-fit: cover;
    width: 100%;
    height:  100%;
    max-width: 100%; 
    max-height:  100%;
    border-radius: 16px;
    
    
    /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`

export const ImageInRow = styled.img`
    display: block;
    transition: transform .4s;
    object-fit: fill;
    width: 100%;
    height:  400px;
    max-width: 100%;
    max-height:  400px;
    border-radius: 16px;
    overflow: hidden;
    @media(max-width:600px) {
        height: 315px;
        max-height: 315px;
    }
    /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`



const ImageNotFound = "Image Not Found!!"

export const Image = (props) => {
    return    (<StyledDiv width={props.width} height={props.height} isTransformOnHover={props.isTransformOnHover} onClick={props.handleOnClick}>
                        <StyledImage src={props.src} alt={ImageNotFound} width={props.width} height={props.height} id={props.id} onClick={props.handleOnClick}
                        />
                </StyledDiv>)
}


export const CartImage = (props) => {
    return    (<StyledDiv width={props.width} height={props.height} isTransformOnHover={props.isTransformOnHover} onClick={props.handleOnClick}>
                        <StyledCartImage src={props.src} alt={ImageNotFound} width={props.width} height={props.height} id={props.id}
                        />
                </StyledDiv>)
}



export const BannerImage = (props) => {
    return    (<StyledDiv width={props.width} height={props.height} isTransformOnHover={props.isTransformOnHover} >
                        <BannerImageContainer src={props.src} alt={ImageNotFound} width={props.width} height={props.height} id={props.id}/>
                </StyledDiv>)
}