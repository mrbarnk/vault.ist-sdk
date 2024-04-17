import axios, { CreateAxiosDefaults } from "axios";
import config from ".";


const axiosConfig: CreateAxiosDefaults = {
    baseURL: config.baseUrl,
    headers: {
        'X-Merchant-ID': config.XMerchantID,
        'X-Version': 1.2
    },
};


const axiosInstance = axios.create(axiosConfig);
// axiosInstance.interceptors.request.use(request => {
//     console.log(`Sending ${JSON.stringify(request.data)} to ${request.baseURL}${request.url}!`)
//     return request;
// })

// Interceptor to throw error data
axiosInstance.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
        if (error.response) {
            // Extract error data from response
            const errorData = error.response.data;
            // console.log(errorData)
            // Throw a new Error with the extracted error data
            throw new Error(JSON.stringify(errorData));
            // } else if (error.request) {
            //     // Handle request errors (e.g., network errors)
            //     console.error('Request error:', error.request);
            //     throw new Error(error.request || 'An error occurred during the request');
        } else {
            // Handle other errors
            // console.log('Error:', error.message || error.errors[0]);
            throw new Error(error.message || error.errors[0]);
        }
    }
);

export { axiosInstance }