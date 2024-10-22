import { DOMAIN_MAIN } from "apis/config"
import axios from "axios"

export const loadingPostAPI = async () => {
    const response = await axios.get(`${DOMAIN_MAIN}/v1/post/getAllPost`)
    return response.data
}
