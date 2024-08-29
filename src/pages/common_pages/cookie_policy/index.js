import React from "react"
import styled from "styled-components"
import { MainContainerDiv } from "../../../App"
import { CookiePolicyContent } from "./content"




const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    /* margin-top: 105px; */
    padding: 70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 100px;
    border-radius: 16px;
    text-align: left;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap: 50px;
    } 
`


export const CookiePolicy= () =>{
    return(<MainContainerDiv>
                <Container>
                    <CookiePolicyContent/>
                </Container>
        </MainContainerDiv>)
}