import { DOMAIN_MAIN } from "apis/config";
import axios from "axios";

export const signUpAPI = async (username, password, email, full_name) => {
    const response = await axios.post(`${DOMAIN_MAIN}/v1/user/register`, { username, password, email, full_name })
    return response.data
}