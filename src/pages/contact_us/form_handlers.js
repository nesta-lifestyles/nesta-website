import { useContext, useState } from 'react';
import { FormContext } from './form_context';


export const useForm = (initialValues, onSubmitValidations) =>{
    const {formData, setFormData, formErrors, setFormErrors, isSubmitSpinner, updateSubmitSpinner, updateFormSuccess} = useContext(FormContext);
    const [useOnChangeValidations, setOnChangeValidations] = useState(false);

    useState(() => {
        setFormData(initialValues);
    }, []);


    const handleOnChange = (updatedFormData) => {
        setFormData(updatedFormData);
        if (useOnChangeValidations && onSubmitValidations) {
            const errors = onSubmitValidations(formData);
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
                } else {
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