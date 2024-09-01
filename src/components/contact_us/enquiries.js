import React from "react"
import styled from "styled-components"
import { H2, Text } from "../../elements/text"

const Container =styled.div`
    flex-direction: column;
    display: flex;
    gap: 50px;
    width: 200px;
    @media (max-width:600px) {
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }
`

const EachElement = styled.div`
    flex-direction: column;
    display: flex;
    gap: 5px;
    text-align: left;
`


const AnchorElement = styled.a`
    text-decoration: none;
    opacity: 0.75;
    &:hover{
        opacity: 1;
        color: black;
    }
`


export const Enquiries = () =>{
    return(<Container>
        <EachElement>
            <H2 height="25px" width="100%">Enquiries</H2>
            <AnchorElement href="mailto:enquiry@nesta.live" class="email-link">
                <Text height="25px" width="100%">enquiry@nesta.live</Text>
            </AnchorElement>
        </EachElement>
        <EachElement>
            <H2 height="25px" width="100%">Sales</H2>
            <AnchorElement href="mailto:sales@nesta.live" class="email-link">
                <Text height="25px" width="100%">sales@nesta.live</Text>
            </AnchorElement>
        </EachElement>
        <EachElement>
            <H2  height="25px" width="100%">Careers</H2>
            <AnchorElement href="mailto:careers@nesta.live" class="email-link">
                <Text  height="25px" width="100%">careers@nesta.live</Text>    
            </AnchorElement>
        </EachElement>
        {/* <EachElement> */}
        {/* <H2  height="25px" width="100%">Call Us</H2>
        <Text height="25px" width="100%">1800-100-100</Text> */}
        {/* </EachElement> */}
    </Container>)
}