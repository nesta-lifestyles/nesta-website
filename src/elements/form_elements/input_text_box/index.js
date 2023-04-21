import styled from "styled-components"
import GetGeoLocation from "../../../components/geolocation"

const StyledInputTextBox = styled.input`
    width: 378.5px;
    height: 56px;
    border-radius: 8px;
    fill: Solid #F5F5F5;
    gap: 10px;
    background-color: #F5F5F5;
    padding-left: 24px;
    font-style: Regular;
    font-size: 16px;
    line-height: 24px;
    line-height: 150%;
    align-content: Left;
    border: none;
    vertical-align: top;
    box-sizing: border-box;
    @media (max-width: 600px) {
        width: 333px;
        
   }
    &:focus {
        outline: none;
        /* border: 2px solid black;
        outline: none;
        border-color: #cc0000; */
  }
`
const StyledCountryCodeInputTextBox = styled.input`
    width: 100px;
    height: 56px;
    border-radius: 8px;
    fill: Solid #F5F5F5;
    gap: 10px;
    background-color: #F5F5F5;
    padding-left: 24px;
    font-style: Regular;
    font-size: 16px;
    line-height: 24px;
    line-height: 150%;
    align-content: Left;
    border: none;
    vertical-align: top;
    box-sizing: border-box;
    &:focus {
        /* border: 1px solid black; */
        outline: none;
        /* border-color: black; */
  }
  @media (max-width: 600px) {
        width: 100px;
   }
`
const PhoneNumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const InputTextBox = () => {
        return(<>
                <p>Input Text Box</p>
               </>)
}


export const NameInputTextBox = (props) => {
    return(<StyledInputTextBox style={props.style} placeholder="Name" onChange={props.onChange}/>)
}

export const EmailInputTextBox = (props) => {
    return(<StyledInputTextBox style={props.style} placeholder="Email" onChange={props.onChange}/>)
}

export const PhoneNumberInputTextBox = (props) => {
    return(
            <PhoneNumberContainer>
                <StyledCountryCodeInputTextBox
                defaultValue={GetGeoLocation()} 
                placeholder="code "
                onChange={props.HandleCountryCode}/>

                <StyledInputTextBox placeholder="Phone Number"
                value={props.phoneNumber}
                style={props.style}
                onChange={props.onChange}
                />
            </PhoneNumberContainer>
        )
}