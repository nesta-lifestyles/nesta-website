import { isValidCountry, isValidEmail, isValidPhoneNumber, isValidState, isValidUserName } from "../utils/validations_utils"

export const validateUserName = (username) => {
    if(!username) {
        return 'Username is required'
    }

    if(username && !isValidUserName(username)) {
        return 'Username is invalid'
    }
}

export const validateEmail = (email) => {
    if(!email) {
        return 'Email is required'
    }

    if(email && !isValidEmail(email)) {
        return 'Email is invalid'
    }
}


export const validatePhoneNumber = (phonenumber) => {
    if(!phonenumber) {
        return 'Phone Number is required'
    }

    if(phonenumber && !isValidPhoneNumber("<NEED TO PASS CODE>",  phonenumber)) {
        return 'Phone Number is invalid'
    }
}


export const validateCountry = (country) => {
    if(!country) {
        return 'country is required'
    }

    if(country && !isValidCountry(country)) {
        return 'country is invalid'
    }
}

export const validateState = (state) => {
    if(!state) {
        return 'state is required'
    }

    if(state && !isValidState(state)) {
        return 'state is invalid'
    }
}
