import React, { useContext} from "react"
import styled from "styled-components"
import { onSubmitPersonalDetailsValidations, PersonalDetails } from "./personal_details"
import { Details, NestaDesignData, NestaVilleData } from "./details"
import { onSubmitProjectaAddressDetailValidations, ProjectaAddressDetails} from "./project_address"
import { ButtonLayout } from "./submit"
import { useForm } from "../../pages/contact_us/form_handlers"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context"
import { contactUsApi } from "../../api/contact_us_api"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;
    width: 804px;
    background-color: white;
    text-align: left;
    @media (max-width: 600px) {
        width: auto;
    }
    /* border-radius: 17px; */
`

const ButtonContainer = styled.div`
    width: 100%;
    align-items: end;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    text-align: center;
`



const onSubmitValidations = (values) => {
    const errors = {};
    errors.personalDetails = onSubmitPersonalDetailsValidations(values.personalDetails)
    errors.projectAddress = onSubmitProjectaAddressDetailValidations(values.projectAddress)
    return errors;
};

export const ContactUs = (props) => {
    const { handleSubmit, handleOnChange,updateSubmitSpinner, updateFormSuccess } = useForm(
        {
            personalDetails:{firstName:'', lastName:'', email:'', phoneNumber:{code:'', number:''}},
            projectAddress: {  line1:'',line2:'',  zipcode:'', city:'', state:'', country:''},
            projectDetails: {
                projectDescription:'',
                nestaDesignList:[NestaDesignData.options[0]],
                nestaVilleList:[NestaVilleData.options[0]],
                nestaDecorList:[],
            }
        },
        onSubmitValidations
    );

    const onSubmit = async(data) => {
        try{
            await contactUsApi(data)
            console.log('Form submitted:', data);
            updateSubmitSpinner(false)
            updateFormSuccess(true)
            
        } catch(err){
            console.log('Error on Form submit:', err);
            updateSubmitSpinner(false)
            updateFormSuccess(true)
        }
        
    };


    return(<Container>
            <PersonalDetails onChange={handleOnChange}/>
            <ProjectaAddressDetails onChange={handleOnChange}>Project Details</ProjectaAddressDetails>
            <Details onChange={handleOnChange} />
            <ButtonContainer>
                <ButtonLayout handleCancel={props.handleCancel} handleOnSubmit={(e) => handleSubmit(e, onSubmit)}/>
            </ButtonContainer>
    </Container>)
}


export const RequestForQuote = (props) => {
    const {cart, clearTheCart} = useContext(NestaDecorCartContext)
   
    const { handleSubmit, handleOnChange,updateSubmitSpinner, updateFormSuccess } = useForm(
        {
            personalDetails:{firstName:'', lastName:'', email:'', phoneNumber:{code:'', number:''}},
            projectAddress: { line1:'',line2:'',  zipcode:'', city:'', state:'', country:''},
            projectDetails: { nestaDecorList: cart }
        },
        onSubmitValidations
    );

    const onSubmit = async(data) => {
        try{
            await contactUsApi(data)
            console.log('Form submitted:', data);
            updateSubmitSpinner(false)
            updateFormSuccess(true)
            clearTheCart();
            
        } catch(err){
            console.log('Error on Form submit:', err);
            updateSubmitSpinner(false)
            updateFormSuccess(true)
            clearTheCart();
        }
    };


    return(<Container>
                <PersonalDetails onChange={handleOnChange}/>
                <ProjectaAddressDetails onChange={handleOnChange}>Delivery Address</ProjectaAddressDetails>
                <ButtonContainer>
                    <ButtonLayout handleCancel={props.handleCancel} handleOnSubmit={(e) => handleSubmit(e, onSubmit)}/>
                </ButtonContainer>
         </Container>)
}