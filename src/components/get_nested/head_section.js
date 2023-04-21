import styled from "styled-components"
import { Title } from "../../elements/text"
import { Button, RevertButton } from "../../elements/button"
import { useNavigate } from "react-router-dom"

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: start;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const TitleContainer = styled.div`
    display: flex;
    padding-top: 20px;
    text-align: center;
    @media (max-width: 600px) {
        padding-top: 0px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    @media (max-width: 600px) {
        display: none;
    }
    
`

const AlignEndContainer = styled.div`
    display: flex;
    margin-left: auto;
    /* margin-right: 10px; */
`

const title="We need few of your information to get started"
export const HeadSection = (props) => {
    const navigate = useNavigate();

    return(<HeaderContainer>
            <TitleContainer>
                <Title value={title} width="100%" height="64px" />
            </TitleContainer>
            <AlignEndContainer>
                <ButtonContainer>
                    <RevertButton width="98px" height="53px" value="Cancel" OnClick={() => navigate(-1)} />
                    <Button width="98px" height="53px" value="Submit" OnClick={props.onSubmit}/>
                </ButtonContainer>
            </AlignEndContainer>
    </HeaderContainer>)
}