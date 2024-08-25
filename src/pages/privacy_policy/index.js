import styled from "styled-components";
import { PrivacyPolicyContent } from "./content";
import React from "react";
import { MainContainerDiv } from "../../App";

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


export const PrivacyPolicy = () =>{
    return(<MainContainerDiv>
                <Container>
                    <PrivacyPolicyContent/>
                </Container>
        </MainContainerDiv>)
}