import axios from "axios"
import { DOMAIN_MAIN } from './config'
export const uploadAvatarAPI = async (formData, token) => {
    const response = await axios.post(`${DOMAIN_MAIN}/v1/user/uploads`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'token': token
        },

    })
    return response
}