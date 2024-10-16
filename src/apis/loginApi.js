import axios from "axios";
export const DOMAIN_MAIN = 'http://localhost:8300'
export const loginApi = async (username, password) => {
    const response = await axios.post(`${DOMAIN_MAIN}/v1/user/login`, { username, password })
    return response.data
}