import styled from "styled-components"
import { Button, RevertButton } from "../../elements/button"
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top:30px;
        
    }
    display: none;
`

export const BottomSection =(props)=> {
    const navigate = useNavigate();

    return(
        <ButtonContainer>
            <Button width="100%" height="53px" value="Submit" OnClick={props.onSubmit}/>
            <RevertButton width="100%" height="53px" value="Cancel" OnClick={() => navigate(-1)} />
        </ButtonContainer>
    )
}