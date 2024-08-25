import { apiRequest } from "./api_request";




export const contactUsApi = async (data) => {
    const payload = {
        // "user":{
        //     "firstName": data.user.firstName,
        //     "lastName": data.user.lastName,
        //     "phoneNumber": data.user.phoneNumber.code+"-"+data.user.phoneNumber.number,
        //     "email": data.user.email,
        // },
        // "address": {
        //     "line1": data.address.line1,
        //     "line2": data.address.line2,
        //     "city": data.address.city,
        //     "state": data.address.state,
        //     "country": data.address.country,
        //     "postalCode": data.address.zipcode,
        //     "type": data.address.type
        // },
        // "projectDetails":{
        //     "projectDescription": data.projectDetails.projectDescription,
        //     "nestaDesignList": data.projectDetails.nestaDesignList,
        //     "nestaVilleList": data.projectDetails.nestaVilleList,
        //     "nestaDecorList": data.projectDetails.nestaDecorList
        // }
    }
    
    try {
        await delay(5000)
        const result = await apiRequest('POST', '/items', payload);
        return result
    
    } catch(err) {
        return undefined

    }
}

export const delay = ms => new Promise(res => setTimeout(res, ms));
