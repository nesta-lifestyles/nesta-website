import styled from "styled-components"

import logo from '../../images/logo/footer_logo.png'
import { H1, H1WithSize, Text, Text500Weight, Title } from "../../elements/text";
import { ForFooter, NestaVilleForFooter } from "./nesta_ville";
import { NestaSocialBar } from "./nesta_social";
import { FooterContent } from "./footer_content";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
        position: relative;
        display: flex;
        gap: 10px;
        flex-direction: column;
        border-radius: 16px 16px 0px 0px;
        @media (max-width:600px){
            position: relative;
            gap: 10px;
            height: 100%;  
           }
`

const TotalContainer = styled.div`
        margin-top: 40px;
        /* padding-left: 70px;
        padding-right: 70px; */
        background: #372F2F;
        border-radius: 16px 16px 0px 0px;
        @media (max-width:600px){
            gap: 10px;
            height: 100%;
            padding-bottom: 100px;
           }
        
`

const Divider = styled.div`
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    opacity: 0.2;
    margin-left: 70px;
    margin-right: 70px;
    @media (max-width:600px){
        margin-left: 20px;
        margin-right: 20px;
    }
`

const FooterBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    justify-content: center;
    @media (max-width:600px){
            display: flex;
            height: 100%;
            gap: 20px;
            padding: 20px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 16px 16px 0px 0px;
    }
`

const LinkForPricacy = styled(Link)`
text-decoration: none;
`

export  const Footer = () => {
    return <>
    <TotalContainer>
    <FooterContainer>
            <FooterContent/>
            <Divider/>
            <FooterBottomContainer>
                <LinkForPricacy to="/privacy">
                 <Text value="Privacy Policy" width="auto" height="auto" size="15px" color="#878383"/>
                </LinkForPricacy>
                <Text value="Terms and condition" width="auto" height="auto" size="15px" color="#878383"/>
                <Text value="Copyright @ 2023 Nesta Lifestyle Private Limited. All rights reserved." width="auto" height="40px" size="15px" color="#878383"/>
            </FooterBottomContainer>
        </FooterContainer>
    </TotalContainer>
        
    </>
}