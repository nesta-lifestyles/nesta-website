import styled from "styled-components"

import logo from '../../images/logo/footer_logo.png'
import { H1, H1WithSize, Text, Text500Weight, Title } from "../../elements/text";
import { ForFooter, NestaVilleForFooter } from "./nesta_ville";
import { NestaSocialBar } from "./nesta_social";

const LogoLink = styled.img`
    /* background-color:green; */
    width: 70px;
    height: 100px;
    max-width: 250px;
    max-height: 250px;
    padding:5px;
    
    @media (max-width:600px){
        display: none;
        /* width: 70px;
        height: 100px;
        max-width: 250px;
        max-height: 250px;
        padding:5px; */
    }
`
LogoLink.defaultProps = {
    src: logo,
  };
  

const Container = styled.div`
        display: flex;
        position: relative;
        height: 300px;
        gap: 100px;
        max-height: 300px;
        flex-direction: row;
        @media (max-width:600px){
            position: relative;
            display: flex;
            gap: 10px;
            height: 100%;
            max-height: 100%;
            padding: 20px;
            padding-left: 40px;
            flex-direction: column;
            border-radius: 16px 16px 0px 0px;
        }
        /* margin-left: 60px;
        margin-right: 60px; */
`

const LogoContainer = styled.div`
    /* flex: 4; */
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin-left: 70px;
    margin-right: 70px;
`

const NestaDesignContainer = styled.div`
    /* flex: 3; */
    padding-top: 50px;
    @media (max-width:600px){
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
    }
`

const NestaVilleContainer = styled.div`
    /* flex: 3; */
    padding-top: 50px;
    @media (max-width:600px){
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
    }
`

const MediaContainer = styled.div`
    display: flex;
    /* flex: 5; */
    padding-top: 50px;
    gap: 20px;
    @media (max-width:600px){
        padding-top: 10px;
        display: flex;
        gap: 20px;
        justify-content: flex-start;
    }
`

const CompayInfoContainer = styled.div`
    display: flex;
    /* flex: 3; */
    padding-top: 50px;
    @media (max-width:600px){
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
    }
`


const TextContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
    @media (max-width:600px){
        flex-direction: column;
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
    }

`

const handleContactUs = () =>{
    console.log("Handle Contact clicked!!")
}


// const nestaVilleNames = [{"name":"The Blanc Ventana", "handleMethod":handleContactUs},
//                          {"name":"Squaretine House", "handleMethod":handleContactUs},
//                          {"name":"Palladity Den", "handleMethod":handleContactUs}]
                         
const nestaDesignNames = [{"name":"Oak serenity", "handleMethod":handleContactUs},
{"name":"White opulence", "handleMethod":handleContactUs},
{"name":"Urban Bastion", "handleMethod":handleContactUs}]
const companyInfo= [
                    {"name":"Contact Us", "handleMethod":handleContactUs},
                    {"name":"Stories", "handleMethod":handleContactUs}
                    ]

export  const FooterContent = () => {
    return <Container>
        <LogoContainer>
            <LogoLink/>
        </LogoContainer>
        <CompayInfoContainer>
            <ForFooter title="Company" arrayOfNames={companyInfo}/>
        </CompayInfoContainer>
        <NestaDesignContainer>
            <ForFooter title="Nesta Design" arrayOfNames={nestaDesignNames}/>
        </NestaDesignContainer>
        {/* <NestaVilleContainer>
            <ForFooter title="Nesta Ville" arrayOfNames={nestaVilleNames}/>
        </NestaVilleContainer> */}
        <MediaContainer>
            <TextContainer>
                <H1WithSize  value="Stay in Touch" width="auto" height="auto" size="20px" color="white"/>
                <NestaSocialBar />
            </TextContainer>
        </MediaContainer>
        
    </Container>
}