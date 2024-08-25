import React from "react"
import styled from "styled-components"
import { Image } from "../../elements/image"
import { H1 } from "../../elements/text"

const ProcessContainer = styled.div`
    background-color: #F5F5F5;
    padding: 100px;
    border-radius: 20px;
    display: grid;
    place-items: center; 
    align-items: center;
    justify-content: center;
    @media (max-width:600px){
      padding:20px;
    } 
`


const GalleryTitleContainer = styled.div`
    margin: auto;
    /* padding-left: 350px; */
    padding-bottom: 30px;
    @media (max-width:600px){
      padding:10px;
    } 
`

export const ProcessLayout = (props) => {
    return(<>
    <ProcessContainer> 
        <GalleryTitleContainer>
         <H1 value="Process" color="black" width="150px"  height="auto"/> 
            </GalleryTitleContainer>
        <Image  
        width= "100%"
        height= "auto"
        src={props.process_image}
        alt="slider image"
        id="first_image"
        />
       
        </ProcessContainer>
 
    </>)
}