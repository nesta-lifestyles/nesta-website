import styled from "styled-components"
import { Image } from "../../elements/image"
import submitIcon from "../../images/icons/check-circle.svg"
import {  Text500Weight } from "../../elements/text"
import cancelIcon from "../../images/icons/x.png"
import { useDispatch } from "react-redux"
import { updateName } from "../reducer"
import { useNavigate } from "react-router-dom"

const OverlayTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    @media (max-width: 600px) {
        width: 293px;
        height: 269px;
    }
`

const SubmitContainer = styled.div`
    background-color:#FFFFFF;
    display: flex;
    flex-direction: column;
    width: 471px;
    height: 295px;
    border-radius: 24px;
    color: black;
    gap: 20px;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        width: 293px;
        height: 269px;
    }
`

const IconContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: #0CC482;
    border-radius: 40px;
    display: flex;
    align-items: center;
    position: relative;
`
const ImageContainer = styled.div`
     width: 50px;
     height: 50px;
  /* background-color: red; */
  /* Center vertically and horizontally */
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    /* display: flexbox; */
    
`
const CancelButton = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 38px;
    position: absolute;
    top: 14px;
    right: 16px;
    align-items: center;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
`




export const SubmitOverlay = (props) => {
    const dispatch = useDispatch()    
    const navigate = useNavigate();

    const handleAfterSubmit = (e) => {
        console.log("clicked handle after submit")
        navigate(-1)
        dispatch(updateName({ type: 'UPDATE_OVERLAY', showOverlay:false}));
        
    }

    return(<>
        <OverlayTextContainer>
            <CancelButton onClick={handleAfterSubmit}> 
                <Image src={cancelIcon} width="20px" height="20px"/>
            </CancelButton>
            <SubmitContainer>
                <IconContainer>
                    <ImageContainer>
                        <Image src={submitIcon} width="41px" height="41px"/>
                    </ImageContainer>
                </IconContainer>
                <Text500Weight value="Your Info Successfully Submitted" width="423px" height="90px"/>
            </SubmitContainer>
        </OverlayTextContainer>
    </>)
}