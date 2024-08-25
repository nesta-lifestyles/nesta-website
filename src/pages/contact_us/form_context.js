import React, { createContext, useContext, useState } from "react";


export const FormContext = createContext();

export const FormContextProvider = ({children}) => {
    
    const [formData, setFormData] = useState({
        personalDetails:{firstName:'', lastName:'', email:'', phoneNumber:{code:'', number:''}},
        projectAddress: {  line1:'',line2:'',  zipcode:'', city:'', state:'', country:''},
        projectDetails: {
            projectDescription:'',
            nestaDesignList:[],
            nestaVilleList:[],
            nestaDecorList:[]
        }
    });
    
    const [formErrors, setFormErrors] = useState({
        personalDetails:{firstName:'', lastName:'', email:'', phoneNumber:{code:'', number:''}},
        projectAddress: {  line1:'',line2:'',  zipcode:'', city:'', state:'', country:''},
        projectDetails: {
            projectDescription:'',
            nestaDesignList:[],
            nestaVilleList:[],
            nestaDecorList:[]
        }
    });

    const [isSubmitSpinner, updateSubmitSpinner] = useState(false);

    const [isSuccess, updateFormSuccess] = useState(false);
    
    const value = {
        formData,
        setFormData,
        formErrors,
        setFormErrors,
        isSubmitSpinner,
        updateSubmitSpinner,
        isSuccess, 
        updateFormSuccess
    };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormContext = () => {
    return useContext(FormContext)
}