import styled from "styled-components"
import { H1WithSize, Text, Title } from "../../elements/text"

const OfficeLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:10px;
    align-items: flex-start;
`
const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:30px;
    align-items: flex-start;
`

const SpanWithLeftAlign = styled.span`
    text-align: left;
`

export const OfficeLocation = () => {
    return <>
        <OfficeLocationContainer>
                <Title width="auto" height="auto" value="Offices" color="black"  size="21px"/>
                <LocationContainer>
                    <SpanWithLeftAlign>
                            <Text value="India," height="auto" width="auto" size="14px"></Text>
                            <Text value="61 6th Cross 1st Main" height="auto" width="auto" size="14px"/>
                            <Text value="Sector 2 HSR Layout" height="auto" width="auto" size="14px"/>
                            <Text value="Bengaluru, KA 560102" width="150px" height="auto" size="14px" />
                    </SpanWithLeftAlign>
                    {/* <SpanWithLeftAlign>
                            <Text value="United States," height="auto" width="auto" size="14px"></Text>
                            <Text value="6850 Peachtree Dunwoody Rd" height="auto" width="auto" size="14px"/>
                            <Text value="Atlanta GA 30328" height="auto" width="auto" size="14px"/>
                    </SpanWithLeftAlign> */}
                    
                </LocationContainer>
        </OfficeLocationContainer>
    </>
}