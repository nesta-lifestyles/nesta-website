import { createSlice } from "@reduxjs/toolkit";

export const getNestedReducer = createSlice({
    name:"getNested",
    initialState:{
        name:"",
        isNameEmpty:false,
        email:"",
        isEmailEmpty:false,
        countryCode:"",
        phoneNumber:"",
        isPhoneNumberEmpty:false,
        address:"",
        carpetArea:"",
        agentCode:"",
        otherInfo:"",
    },
    reducers:{
        updateName: (state, action) =>{
            // console.log("called update"+JSON.stringify(action))
            switch(action.payload.type){
                case "ADD_NAME": {
                    console.log("called update for name"+JSON.stringify(action))
                    if(action.payload.name=="") {
                        return {
                            ...state,
                            name: action.payload.name,
                            isNameEmpty: true         
                        }
                    }
                    return {
                       ...state,
                        name: action.payload.name,
                        isNameEmpty: false
                    }
                    break;
                }

                case "UPDATE_ISNAME_EMPTY":{
                    console.log("update empty name"+JSON.stringify(action))
                    return {
                       ...state,
                        isNameEmpty: action.payload.isNameEmpty
                    }
                    break;
                }
                
                case "ADD_EMAIL": {
                    // console.log("called update email"+JSON.stringify(action))
                    if(action.payload.email=="") {
                        return {
                            ...state,
                            name: action.payload.email,
                            isEmailEmpty: true         
                        }
                    }
                    return {
                       ...state,
                        email: action.payload.email,
                        isEmailEmpty: false
                    }
                    break;
                }

                case "UPDATE_ISEMAIL_EMPTY":{
                    console.log("update empty email"+JSON.stringify(action))
                    return {
                       ...state,
                        isEmailEmpty: action.payload.isEmailEmpty
                    }
                    break;
                }
                

                case "ADD_PHONE_NUMBER": {
                    // console.log("called phone number"+JSON.stringify(action))
                    return {
                       ...state,
                       phoneNumber: action.payload.phoneNumber,
                       isPhoneNumberEmpty:false
                    }
                    break;
                }
                
                case "UPDATE_IS_PHONE_NUMBER_EMPTY":{
                    console.log("update empty phone number" + JSON.stringify(action))
                    return {
                       ...state,
                       isPhoneNumberEmpty: action.payload.isPhoneNumberEmpty
                    }
                    break;
                }

                default:
                    console.log("DEFAULT NEW NAME")
                    return {
                        ...state,
                         name:action.payload.name
                     }
                    break;
            }
        },
        // updateEmail: (state) => {
        //     state.email = "email"
        // },
        // updatePhoneNumber: (state) => {
        //     console.log("called update phone number")
        //     state.phoneNumber = "phoneNumber"
        // }
    }
})

export const {updateName, updateEmail, updatePhoneNumber} = getNestedReducer.actions
export default getNestedReducer.reducer