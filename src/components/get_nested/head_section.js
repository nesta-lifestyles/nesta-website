import styled from "styled-components"
import { Title } from "../../elements/text"
import { Button, RevertButton } from "../../elements/button"
import { useNavigate } from "react-router-dom"

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    @media (max-width: 600px) {
        width: 330px;
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
    margin-right: 10px;
`

const title="We need few of your information to get started"
export const HeadSection = (props) => {
    const navigate = useNavigate();

    return(<HeaderContainer>
            <Title value={title} height="64px" />
            <AlignEndContainer>
                <ButtonContainer>
                    <RevertButton width="98px" height="53px" value="Cancel" OnClick={() => navigate(-1)} />
                    <Button width="98px" height="53px" value="Submit" OnClick={props.onSubmit}/>
                </ButtonContainer>
            </AlignEndContainer>
    </HeaderContainer>)
}