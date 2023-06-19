import styled from "styled-components"
import { H1WithSize, Text, Title } from "../../elements/text"

const CustomerSupportContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:10px;
    align-items: flex-start;
`

export const CustomerSupport = () => {
    return <>
        <CustomerSupportContainer>
                <Title width="auto" height="auto"  value="Customer Support" color="black" size="21px"/>
                <Text value="support@nesta.live" width="auto" height="auto" size="14px" />
        </CustomerSupportContainer>
    </>
}