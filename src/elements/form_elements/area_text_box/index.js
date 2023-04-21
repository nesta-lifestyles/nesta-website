import styled from "styled-components";

const StyledAreaInputTextBox = styled.textarea`
    width: 834px;
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
    &:focus {
        outline: none;
    }
    @media (max-width: 600px) {
            width: 100%;
    }
`




export const AreaInputTextBox = (props) => {
    return(
        <StyledAreaInputTextBox
        placeholder={props.placeholder}/>
    )
}

export const CarpetAreaInputTextBox = () => {
    return(
        <StyledInputTextBox
        placeholder="Carpet Area"/>
    )
}

export const AgentCodeInputTextBox = () => {
    return(
        <StyledInputTextBox
        placeholder="Referral Code"/>
    )
}

export const OtherInfoInputTextBox = () => {
    return(
        <StyledInputTextBox
        placeholder="Describe your requirement"/>
    )
}

