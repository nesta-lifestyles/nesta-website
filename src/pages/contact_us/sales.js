import styled from "styled-components"
import { H1WithSize, Text, Title } from "../../elements/text"

const SalesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`

export const SalesInfo = () => {
    return <>
        <SalesInfoContainer>
                <Title width="auto" height="auto" value="Sales" color="black" size="21px"/>
                <Text value="sales@nesta.live" width="auto" height="auto" size="14px" />
        </SalesInfoContainer>
    </>
}