import React, { useContext, useState } from "react";
import styled from "styled-components";
import { InputTextBox } from "../../elements/form";
import { Text } from "../../elements/text";
import { FormContext } from "../../pages/contact_us/form_context";
import { Autocomplete } from "@react-google-maps/api";
import "./google_auto_complete.css"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
`

const RowContainer =styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
    @media (max-width: 600px) {
        flex-direction: column;  
    }
`



export const onSubmitProjectaAddressDetailValidations = (values) => {
  

    const errors = {}
    // errors.phonenumber = validatePhoneNumber(values.phonenumber)
    // errors.state = validateState(values.state)
    // errors.country = validateCountry(values.country)
    // errors.pincode = validateCountry(values.country)
    
    return errors;
}

// export const onChangeProjectaAddressDetailValidations = (values) => {
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




export const ProjectaAddressDetails = (props) => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [autocomplete, setAutocomplete] = useState(null);

    const { formErrors, formData} = useContext(FormContext);

    // const onChange = (e) => {
    //     console.log("DATA ON CHANGE", e)
    //     const {name, value, type} = e.target
    //     const updatedFormData = {...formData, projectDetails:{...formData.projectDetails, [name]:value}}
    //     props.onChange(updatedFormData)
    // }

    const updateToContext = (jsonPartOfProjectDetails) => {
        console.log("PART OF Personal DETAILS", jsonPartOfProjectDetails)
        const updatedFormData = {...formData, projectAddress:{...formData.projectAddress, ...jsonPartOfProjectDetails}}
        props.onChange(updatedFormData)
    }

    const handlePlaceChanged = () => {
        const place = autocomplete.getPlace();
        
        if (place.address_components) {
          const addressComponents = place.address_components;
          
          const city = addressComponents.find(component => component.types.includes('locality'));
          const state = addressComponents.find(component => component.types.includes('administrative_area_level_1'));
          const country = addressComponents.find(component => component.types.includes('country'));
          const zipCode = addressComponents.find(component => component.types.includes('postal_code'));
            
          setCity(city ? city.long_name : '');
          setState(state ? state.long_name : '');
          setCountry(country ? country.long_name : '');
          setzipCode(zipCode ? zipCode.long_name : '');
          updateToContext({addressLine1:place.formatted_address,
            zipCode:zipCode,
            city:city,
            state:state,
            country:country
          });
        }
      };
    
      const onChange = (e) => {
        // const {name, value} = e.target
        // updateToContext({[name]:value});
    }


    return(<div>
            <Text width="auto" height="auto">{props.children}</Text>
                <Container>    
                <Autocomplete className="map-auto-complete" onLoad={(autocomplete) => setAutocomplete(autocomplete)} onPlaceChanged={handlePlaceChanged}>
                    <InputTextBox type="text" onChange={onChange} name='addressLine1' placeholder="Address" error={formErrors.projectAddress.line1}/>
                </Autocomplete>
                {/* <TextAreaInputBox onChange={onChange} width="100%"  name='addressLine2' type="text" placeholder="Address Line 2" error={formErrors.projectAddress.line2} /> */}
                <RowContainer>
                    <InputTextBox onChange={onChange} value={city} width="100%"  name='city' type="numeric"  placeholder="City" error={formErrors.projectAddress.city} />
                    <InputTextBox onChange={onChange} value={state} width="100%"  name='state' type="text" placeholder="State" error={formErrors.projectAddress.state} />
                </RowContainer>
                <RowContainer>
                    <InputTextBox onChange={onChange}  value={zipCode} width="100%"  name='zipcode' type="text"  placeholder="Zip Code"  error={formErrors.projectAddress.zipcode}/>
                    <InputTextBox onChange={onChange} value={country} width="100%"  name='country' type="text" placeholder="Country"  error={formErrors.projectAddress.country}/>
                </RowContainer>
            </Container>
        </div>)
}