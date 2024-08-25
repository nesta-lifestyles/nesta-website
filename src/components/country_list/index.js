import React, { useState, useMemo } from 'react'
import PhoneInput, { formatPhoneNumber, getCountryCallingCode } from 'react-phone-number-input'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { getGeoInfo } from '../../api/current_location'

export const CountrySelector = () =>{
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    console.log("VALUE OF SELECTED COUNTRY", value)
    console.log("VALUE OF SELECTED COUNTRY", value.val)
    setValue(value)
  }

  return <Select options={options} value={value.value} onChange={changeHandler} />
}


export const getListCountryCodeAndPhoneCode = (countryCode)=>{
    let returnList = [] 
    // returnList.push(getCountryFlag("IN")+" +91")
    const currentCountryCode = getGeoInfo();
    let options = useMemo(() => countryList().getData(), [])

    options.forEach(country => {
        // console.log("COUNTRY", country)
        if(country.value){
            if(country.value !== 'AQ' && country.value !== 'BV'&& country.value !== 'TF'
                && country.value !== 'HM'&& country.value !== 'PN'&& country.value !== 'GS'&& country.value !== 'UM') {
                let countryCode = getCountryCallingCode(country.value)
                // console.log("COUNTRY CODE 2", country)
                if(currentCountryCode === "+"+countryCode) {
                    console.log("LOCAL COUNTRY CODE", currentCountryCode, "COUNTRY CODE", countryCode)    
                    returnList.push({"phoneCode":countryCode, "label":country.label, "countryCode":country.value, "autoSelect":true})    
                } else {
                    returnList.push({"phoneCode":countryCode, "label":country.label, "countryCode":country.value, "autoSelect":false})
                }
            }
        }
        }) 
    console.log("RETURNING LIST");
    // getCountries().forEach(code =>returnList.push(getCountryFlag(code)+" +"+getCountryCallingCode(code)))
    return returnList
}

export const getCallingCodeByCountryCode = (countryCode)=>{
    // console.log("COUNTRY", countryCode)
    if(countryCode !== 'AQ') {
        return getCountryCallingCode(countryCode)
    } else {
        return "0"
    }
    
}

export const formatPhoneNumber1 = (countryCode, phoneNumber) =>{
    var formatedPhoneNumber = formatPhoneNumber(countryCode+phoneNumber)
    if(Array.from(formatedPhoneNumber)[0]=== '0') {
        formatedPhoneNumber = formatedPhoneNumber.substring(1)
    }
    formatedPhoneNumber = formatedPhoneNumber.replace(")","")
    formatedPhoneNumber = formatedPhoneNumber.replace("(","")
    formatedPhoneNumber =  "("+formatedPhoneNumber.concat(")")
    formatedPhoneNumber = formatedPhoneNumber.replace(" ",") (")
    return formatedPhoneNumber
}

export const CountryPhoneCodeSelector = () => {
    const [value, setValue] = useState('')
    console.log("PHONE VALUE OF SELECTED COUNTRY", value)
    const changeHandler = value => {
        console.log(getCountryCallingCode('IN'))
        console.log(" PHONE VALUE OF SELECTED COUNTRY", value)
        // console.log("PHONE VALUE OF SELECTED COUNTRY", value.val)
        setValue(value)
      }
    
    return(
        <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={changeHandler}/>
    )
}