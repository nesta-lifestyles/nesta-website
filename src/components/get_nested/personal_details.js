import styled from "styled-components"
import { EmailInputTextBox, InputTextBox, NameInputTextBox, PhoneNumberInputTextBox } from "../../elements/form_elements/input_text_box"
import { useState } from "react"
import { useGeolocated } from "react-geolocated"
import { Text } from "../../elements/text"
import { ErrorText } from "../../elements/error"
import { useDispatch, useSelector } from "react-redux"
import { updateName, updatePhoneNumber } from "../reducer/index"
import { useEffect } from "react"

const RowContiner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-top: 20px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const getBorderStyle = (flag) => {
    let borderStyleForName = {
        border :"none"
    }

    if(flag) {
        borderStyleForName = {
            border: "1px solid #D61B26"
        }
    }
    return borderStyleForName
}
let errorForEmail
export const PersonalDetails = (props) => {
    const dispatch = useDispatch()    
    const [phoneNumber, setPhoneNumber] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [prevPhoneNumber, setPreviousPhoneNumber] = useState("")
    const [isEmailCorrect, setEmailCorrect] = useState(true)
    const [name, setName] = useState("")
    
    if(props.isEmailEmpty){
        errorForEmail = "Please enter email"
    }

    const handleCountryCode = (e) => {
        setCountryCode(e.target.value)
    }
    
    const handlePhoneNumbers = (e) => {
        e.preventDefault();
        const re = /^[0-9\b]+$/;
        if(re.test(e.target.value)) {
            let latestPhoneNumber = e.target.value
            setPhoneNumber(latestPhoneNumber)
            setPreviousPhoneNumber(phoneNumber)
            dispatch(updateName({ type: 'ADD_PHONE_NUMBER', phoneNumber:phoneNumber}))
        }
        console.log( "COMEING  ELSE PART" + re.test(e.target.value))
    }
    
    const handleEmail = (e) => {
        const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        let isEmpty = e.target.value == ""
       if(!isEmail(e.target.value) && !isEmpty){
            e.target.style.border = "1px solid #D61B26";
            setEmailCorrect(false)
            errorForEmail = "Please enter valid email"
            dispatch(updateName({ type: 'ADD_EMAIL', email:e.target.value}))
        } else {
            setEmailCorrect(true)
            e.target.style.border = "none";
            dispatch(updateName({ type: 'ADD_EMAIL', email:e.target.value}))
        }
        console.log(isEmail(e.target.value))
    }

    const handleName = (e) => {
        e.preventDefault();
        console.log("Name value from board"+ props.isNameEmpty)
        if(props.isNameEmpty) {
            e.target.style.border = "1px solid #D61B26";
        } else {
            e.target.style.border = "none";
        }
        console.log("Name value from board"+ e.target.value)
        setName(e.target.value)
        dispatch(updateName({type:'ADD_NAME', name:e.target.value}))
    }

    return(
        <>
            <RowContiner>
            <StyledContainer>
                <NameInputTextBox style={getBorderStyle(props.isNameEmpty)} onChange={handleName} />
                    {props.isNameEmpty&&<ErrorText value="Please enter Name" 
                        height="42px"
                        color="#D61B26"/>}
            </StyledContainer>
                <StyledContainer>
                    <EmailInputTextBox style={getBorderStyle(props.isEmailEmpty)} onChange={handleEmail}/>
                    {(props.isEmailEmpty ) && <ErrorText value={errorForEmail}
                    height="42px"
                    color="#D61B26"/>}
                </StyledContainer>
            </RowContiner>
            <RowContiner>
            <StyledContainer>
                <PhoneNumberInputTextBox style={getBorderStyle(props.isPhoneNumberEmpty)} phoneNumber={phoneNumber} HandleCountryCode={handleCountryCode} onChange={handlePhoneNumbers}/>
                    {(props.isPhoneNumberEmpty ) && <ErrorText value="Please enter Phone number"
                        height="42px"
                    color="#D61B26"/>}
            </StyledContainer>      
            </RowContiner>
        </>
        
    )
}