import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api/'
    // baseURL: 'http://ecommerce.appenlaweb.com:5000/api/'
    baseURL: 'https://global-store-bk.onrender.com/api/'
});

export {
    axiosInstance,
}
