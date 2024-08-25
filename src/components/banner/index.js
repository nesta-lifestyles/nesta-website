import styled from "styled-components"
import React from 'react';
import { CarouselLocal } from "../../layouts/banner_layout/carasoule";


const StyledBannerDiv = styled.div`
        position: relative;
        width: 100%;
        height: 675px;
        border-radius: 24px;
        border: 3px;
        border-color: green;
        max-width: 100%;
        max-height: 675px;
        @media (max-width: 600px) {
          height: 100%;
          max-height: 100%;
          overflow:hidden ;
        }
        
`


const StyledOuterDiv = styled.div`
        margin-top: 20px;
        @media (max-width: 1200px) {
          margin: 0px;       
        }

`

const StyledDiv = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        background: ${(props) => `url(${props.src})`} no-repeat center center fixed; 
        background-attachment: scroll;
        background-size:100% auto;
        background-repeat: no-repeat;
        background-position: center;
        border-radius:20px;
        animation: animatedBackground ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        @media (max-width: 1200px) {
          width:100%;
          max-width:100%;
          background-size:cover;          
        }

        @media (max-width:600px){
          width:100%;
          max-width:100%;
          height: 100%;
          max-height: 100%;
          background-size:cover;
        }

        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        @keyframes animatedBackground {
            0% {
                opacity: .6;
            }
            100% {
                opacity: 1;
            }
        }
`

export const Banner =(props)=>{
    return <StyledBannerDiv>
      <StyledOuterDiv>
          <StyledDiv>
                    <CarouselLocal handleMeetUsButton={props.handleMeetUsButton}>
                    </CarouselLocal>
          </StyledDiv>
        </StyledOuterDiv>
      </StyledBannerDiv>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}


export const ViewAllButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: black;
    width: 160px;
    height: auto;
    background-color: transparent;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    margin:24px;
    @media (max-width: 991px) {
        
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`