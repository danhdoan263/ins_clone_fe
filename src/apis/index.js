import axios from "axios";
export const DOMAIN_MAIN = 'http://localhost:8300'
export const fetchBoardDetailsAPI = async (boardId) => {
    const response = await axios.get(`${DOMAIN_MAIN}/v1/board/${boardId}`)
    return response.data
}