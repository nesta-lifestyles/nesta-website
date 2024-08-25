import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ErrorText } from "../error";
import {  formatPhoneNumber1, getListCountryCodeAndPhoneCode } from "../../components/country_list";
import getCountryFlag from "country-flag-icons/unicode";
import { FormContext } from "../../pages/contact_us/form_context";
import { isMobile } from "react-device-detect";

const StyledInputTextBox = styled.input`
    width: ${props => props.width === undefined ?"50%":props.width};;
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
        width: 100%;
        height: 40px;
        gap: 5px;
        padding-left: 12px;
        font-size: 14px;
   }

    &:focus {
        outline: none;
        /* border: 2px solid black;
        outline: none;
        border-color: #cc0000; */
    }
`


const StyledInputTextBox2 = styled.input`
    width: ${props => props.width === undefined ?"90%":props.width};;
    height: 100%;
    border-radius: 8px;
    fill: Solid black;
    opacity: 0.5;
    background-color: #767676;
    padding-left: 10px;
    font-style: Regular;
    font-size: 16px;
    line-height: 24px;
    line-height: 150%;
    align-content: Left;
    border: none;
    vertical-align: top;
    box-sizing: border-box;
    ::placeholder {
        color: #767676;
        opacity: 1; /* Firefox */
    }

    @media (max-width: 600px) {
        width: 100%;
        
   }

    &:focus {
        outline: none;
        /* border: 2px solid black;
        outline: none;
        border-color: #cc0000; */
    }
`

const getErrorBorderStyleForInputBox = (flag) => {
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


export const InputTextBox = (props) => {
    const {isSubmitSpinner} =  useContext(FormContext);

    return(
            <div style={{"width":props.width}}>
                <StyledInputTextBox type={props.type} style={getErrorBorderStyleForInputBox(props.error)}
                name={props.name}
                typeof={props.type}
                value={props.value}
                onBlur={props.onBlur}
                disabled={isSubmitSpinner}
                width="100%" placeholder={props.placeholder} 
                onChange={props.onChange}>
                {props.children}
                </StyledInputTextBox>
                {props.error && <ErrorText value={props.error} width={props.width} height="100%" />}
            </div>)
}

export const InputTextBoxEmail = (props) => {
    return(<StyledInputTextBox2 width={props.width} placeholder={props.placeholder} onChange={props.onChange} />)
}


const SelectTag = styled.select`
        /* padding: 5px; */
        border: none;
        background-color: #F5F5F5;
        font-size: 16px;
        width: 100%;
        padding-left: 24px;
        border-radius: 8px;
        height: 56px;
    @media (max-width: 600px) {
        width: 100%;
        height: 40px;
        gap: 5px;
        padding-left: 12px;
        font-size: 14px;
   }
`

const OptionTag = styled.option`
        /* padding: 5px; */
        background-color: #F5F5F5;
        color: #F5F5F5;
        width: 100%;
        font-family: Poppins;
`

const PhonecodeContainer = styled.div`
    width: 30%;
`


export const LocalPhoneInput = (props) =>{
    const {isSubmitSpinner} =  useContext(FormContext);
    const [phoneNumber, setPhoneNumber] = useState();
    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState();


    const [phoneCode, setCountryCode] = useState({});
    const countryList = getListCountryCodeAndPhoneCode();

    const [seleOC, setSeleOC] = useState({});
    const [currentOptions] = useState(getListCountryCodeAndPhoneCode());

    const handleSelectedPhoneInput = (localValue)=>{
        console.log("SELECTED COUNTRY CODE", localValue)
        // console.log("GLOBAL COUNTRY CODE", value)
        const selectElement = document.getElementById("mySelect");
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        setSeleOC(selectedOption.textContent);
        if(isMobile){
            selectedOption.textContent=getCountryFlag(countryList[selectElement.selectedIndex].countryCode);
            selectElement.style.fontSize = '30px';
            // selectElement.style.width = '50px';
        } else {
            selectedOption.textContent=getCountryFlag(countryList[selectElement.selectedIndex].countryCode)+" (+"+countryList[selectElement.selectedIndex].phoneCode+")";
            
        }
        setCountryCode(countryList[selectElement.selectedIndex].phoneCode)
    }

    const handleOnPhoneNumberChange = (e)=>{
        e.preventDefault();
        const { value} = e.target
        setPhoneNumber(value)   
        setFormattedPhoneNumber(value)
        props.onChange({"phoneNumber":{code:phoneCode, number:value}})
    }

    const handleFormatPhoneNumberChange = ()=>{
        const selectElement = document.getElementById("mySelect");
        let formattedPhoneNumber =formatPhoneNumber1("+"+countryList[selectElement.selectedIndex].phoneCode, phoneNumber) 
        setFormattedPhoneNumber(formattedPhoneNumber)
        setPhoneNumber(phoneNumber)   
    }

    const handleSelectOnClick = () =>{
        console.log("FIRST COUNTRY LIST",countryList[0])
        const selectElement = document.getElementById("mySelect");
        // selectElement.style.fontSize = '16px';
        selectElement.style.fontStyle = 'Poppins';
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        selectedOption.textContent =seleOC;
    }

    const handleOnSelectChange = (e)=>{
        const selectElement = document.getElementById("mySelect");
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        selectedOption.textContent =seleOC;
    }

    
    return(<>
                <PhonecodeContainer>
                    <SelectTag disabled={isSubmitSpinner} id="mySelect" onSelect={handleOnSelectChange} onChange={(e)=>handleSelectedPhoneInput(e.target.value)} onClick={handleSelectOnClick}>
                                        {currentOptions.map((number) => (
                                            <OptionTag selected={number.autoSelect} key={number} value={number}>
                                                {number.label+"(+"+number.phoneCode+")"}
                                            </OptionTag>
                                        ))}
                                        </SelectTag>
                    
                </PhonecodeContainer>
                <InputTextBox name='number'  onChange={handleOnPhoneNumberChange} onBlur={handleFormatPhoneNumberChange} value={formattedPhoneNumber} width="80%" type="text" placeholder="Phone Number" error={props.error}/>
            </>
        )
}


export const SelectItem = (props) => {
    const {isSubmitSpinner} =  useContext(FormContext);

    return(<SelectTag id="mySelect" disabled={isSubmitSpinner}  onSelect={props.onSelect} onChange={props.onChange} onClick={props.onClick}>
            {props.selectData.options.map((option) => (
                <OptionTag selected={option.autoSelect} key={option.key} value={option.value}>
                    {option.wantToShow}
                </OptionTag>
            ))}
            </SelectTag>)
}