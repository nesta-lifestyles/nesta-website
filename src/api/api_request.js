import { axiosInstance } from "./axios_config";

export const  apiRequest= async(method, endpoint, data = null)=>{
    try {
      const response = await axiosInstance({
        method,
        url: endpoint,
        data, // This will be null for GET requests
      });
  
      return response.data;
    } catch (error) {
      // Handle error responses
      console.error('API request error:', error);
      throw error; // Re-throw the error to be handled by the calling function
    }
  };