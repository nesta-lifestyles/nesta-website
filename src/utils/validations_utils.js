/* eslint-disable */

export const isValidEmail = ( email ) => {
    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        return true
    }
    else {
        return false
    }
}

export const isValidUserName = (userName) => {
    if(userName) {

    }
    return true
}

export const isValidPhoneNumber = (code, phoneNumber) => {
    return true
}


export const isValidCountry = (country) => {
    return true
}

export const isValidState = (country) => {
    return true
}
