import axios from 'axios';

const BASE_URL = 'https://localhost:5000/api/v1/';

export const publicRequest = axios.create
    ({
        baseURL: BASE_URL,
    })
export const userRequest = axios.create
    ({
        baseURL: BASE_URL,
        headers: {
            token: "Bearer " + localStorage.getItem('token')
        }
    }
    )