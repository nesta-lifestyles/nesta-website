import axios from "axios";
import { useState } from "react";


export const getGeoInfo = () => {
    const [countryCode, updateCountryCode] = useState(undefined);
    axios.get('https://ipapi.co/json/').then((response) => {
        console.log("RESPONSE DATA", response.data);
        let data = response.data;
        // this.setState({
        //     countryName: data.country_name,
        //     countryCode: data.country_calling_code
        // });
        updateCountryCode(data.country_calling_code)
    }).catch((error) => {
        console.log(error);
        return "UNDEFINDES"
    });
    return countryCode;
};