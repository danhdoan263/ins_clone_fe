import axios from "axios";
import { DOMAIN_MAIN } from "apis/config";
export const signInAPI = async (username, password) => {
    const response = await axios.post(`${DOMAIN_MAIN}/v1/user/login`, { username, password })
    return response.data
}


