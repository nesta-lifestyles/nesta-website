import React, { useContext } from "react"
import styled from "styled-components"
import { FormContext } from "../../pages/contact_us/form_context"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        gap: 0px;
    }
`

const CancelButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: black;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    background-color: #F5F5F5;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    @media (max-width:600px){
      height: 53px;
      margin: 10px;
      width: 100%;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`
const SpinnerDiv = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    width: 100%;
    justify-content: center;
`

const Button = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    background-color: #1B1E1E;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    user-select: none;
    @media (max-width:600px){
      height: 53px;
      margin: 10px;
      width: 100%;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

export const ButtonLayout = (props) => {
    const {isSubmitSpinner} =  useContext(FormContext);
    
        return(<Container>
            <CancelButton onClick={props.handleCancel}> Cancel </CancelButton>
            <Button onClick={props.handleOnSubmit}>
            {isSubmitSpinner &&<SpinnerDiv>
                    <div class="spinner-border spinner-border-sm" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <div>
                        Submitting...
                    </div>
                </SpinnerDiv>}
                {!isSubmitSpinner && "Submit"}
            </Button>
        </Container>)
}