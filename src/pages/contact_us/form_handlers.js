import { useContext, useState } from 'react';
import { FormContext } from './form_context';


export const useForm = (initialValues, onSubmitValidations) =>{
    const {formData, setFormData, formErrors, setFormErrors, isSubmitSpinner, updateSubmitSpinner, updateFormSuccess} = useContext(FormContext);
    const [useOnChangeValidations, setOnChangeValidations] = useState(false);

    useState(() => {
        setFormData(initialValues);
    }, []);

    console.log("form Data after setting initial values", formData)

    const handleOnChange = (updatedFormData) => {
        console.log("VALUE onchange has been called, ", updatedFormData)
        setFormData(updatedFormData);
        if (useOnChangeValidations && onSubmitValidations) {
            const errors = onSubmitValidations(formData);
            console.log("Errors", errors)
            setFormErrors(errors);
        }
    }
  
    function isPositive(object) {
        return Object.values(object).every(v => v && typeof v === 'object'
            ? isPositive(v)
            : v === 0 || v === null || v === undefined
        );
    }

    const handleSubmit = (e, onSubmit) => {
            e.preventDefault();
            if(onSubmitValidations) {
                const errors = onSubmitValidations(formData);
                if(!isPositive(errors)) {
                    setOnChangeValidations(true)
                    setFormErrors(errors);
                    console.log("ONSUBMIT VALIDATIONS RESULT", errors)
                } else {
                    console.log("FORM DATA BEFORE SUBMITTING", formData)
                    updateSubmitSpinner(true)
                    onSubmit(formData)
                }
                
            } else {
               
            }
    }

    return {
        formData,
        formErrors,
        handleSubmit,
        handleOnChange,
        isSubmitSpinner,
        updateSubmitSpinner,
        updateFormSuccess
    };
}