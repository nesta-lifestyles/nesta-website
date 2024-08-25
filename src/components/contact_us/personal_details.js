import React, { useContext } from "react"
import { InputTextBox, LocalPhoneInput } from "../../elements/form"
import styled from "styled-components"
import { Text } from "../../elements/text"
import { FormContext } from "../../pages/contact_us/form_context"
import { validateEmail, validatePhoneNumber, validateUserName } from "../../handlers/form_validation_handlers"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    
`
const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
    width: 100%;
    @media (max-width: 600px) {
        flex-direction: column;  
    }
`
const PhoneNumberContainer =styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
    width: 100%;
    @media (max-width: 600px) {
        width: 100%;
        gap:5px;
    }
`

export const onSubmitPersonalDetailsValidations = (values) => {
    const errors = {}
    errors.firstName =  validateUserName(values.firstName)
    errors.email = validateEmail(values.email)
    errors.phoneNumber = {}
    // errors.phonenumber.code = validatePhoneNumber(values.phonenumber.code)
    errors.phoneNumber.number = validatePhoneNumber(values.phoneNumber.number)
    return errors;
}

//TODO: Needs to Check on this
// export const onChangePersonalDetailsValidations = (values) => {
//     const errors = {}
//     if (values.username && !isValidUserName(values.username)) {
//         errors.username = 'Username is invalid';
//     }

//     if (values.email && !isValidEmail(values.email)) {
//         errors.email = 'Please provide a valid email.';
//     }

//     if (values.phonenumber && !isValidEmail("<NEED TO PASS CODE>",values.phonenumber)) {
//         errors.phonenumber = 'Phone Number is required';
//     }
//     return errors;
// }



export const PersonalDetails = (props) => {
    const { formErrors, formData} = useContext(FormContext);
    console.log("FORM ERRORS", formErrors)

    const updateToContext = (jsonPartOfPersonalDetails) => {
        console.log("PART OF Personal DETAILS", jsonPartOfPersonalDetails)
        const updatedFormData = {...formData, personalDetails:{...formData.personalDetails, ...jsonPartOfPersonalDetails}}
        props.onChange(updatedFormData)
    }
        

    const onChange = (e) => {
        const {name, value} = e.target
        updateToContext({[name]:value});
    }
     
   
    return(<div> 
        <Text height="auto" width="100%">Personal Details</Text>
        <Container>
                <RowContainer>
                    <InputTextBox name='firstName' type="text" onChange={onChange} placeholder="First Name"  width="100%" error={formErrors.personalDetails.firstName} /> 
                    <InputTextBox name='lastName' type="text" onChange={onChange} placeholder="Last Name"  width="100%" error={formErrors.personalDetails.lastName} /> 
                </RowContainer>
                <RowContainer>
                    <PhoneNumberContainer>
                        <LocalPhoneInput error={formErrors.personalDetails.phoneNumber.number} onChange={updateToContext}/>
                        {/* <InputTextBox name='code' width="20%" type="tel"  placeholder="code" error={formErrors.personalDetails.phonenumber.code} /> */}                        
                    </PhoneNumberContainer>
                    <InputTextBox placeholder="Email" 
                        type="email" onChange={onChange} name='email' width="100%"  error={formErrors.personalDetails.email} />       
                </RowContainer>
        </Container>
        </div>)
}