import React, { useContext } from "react"
import styled from "styled-components"
import { FormContext } from "../../pages/contact_us/form_context";


const StyledAreaInputTextBox = styled.textarea`
    width: 100%;
    height: 80px;
    border-radius: 8px;
    fill: Solid #F5F5F5;
    background-color: #F5F5F5;
    padding-left: 24px;
    font-style: normal;
    text-decoration-style:Paragraph/P-16px;
    font-family:sans-serif;
    font-size: 16px;
    padding-top: 16px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 40px;
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
        width: 100%;
        height: 128px;
   }
`


export const TextAreaInputBox = (props) => {
    const {isSubmitSpinner} =  useContext(FormContext);
    return(<StyledAreaInputTextBox placeholder={props.placeholder} disabled={isSubmitSpinner} name={props.name} onChange={props.onChange}/>)
}