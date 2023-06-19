import styled from "styled-components"
import { SalesInfo } from "./sales"
import { CustomerSupport } from "./customer_support"
import { OfficeLocation } from "./office_locations"
import { H1WithSize, Title } from "../../elements/text"

const ContactUsContainer = styled.div`
    width: 781px;
    height: 100%;
    padding-left: 24px; 
    padding-right: 24px; 
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap:30px;
    padding-bottom: 20px;

    @media (max-width: 600px) {
        width: fit-content;
        height: fit-content;
        padding: 0px;
        margin-left: 10px;
        margin-right: 10px;
        overflow-y: scroll;
    }
`


export const ContactUs = ()=> {
    return <>
            <ContactUsContainer>
                <H1WithSize value="Contact" width="auto" height="auto" size="24px" color="black"/>
                <SalesInfo />
                <CustomerSupport/>
                <OfficeLocation/>
            </ContactUsContainer>
            
        </>
}