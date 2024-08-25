import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers:{
        'Content-Type':'application/json'
    },
    timeout: 5000
})