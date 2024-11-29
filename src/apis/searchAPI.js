//http://localhost:8300/v1/user/search?searchUser=do
import { headerToken, DOMAIN_MAIN } from 'apis';
import axios from 'axios';

export const searchUserAPI = async (textSearch, user_id) => {
  const response = await axios.get(
    `${DOMAIN_MAIN}/v1/user/search?searchUser=${textSearch}&user_id=${user_id}`,
    headerToken
  );
  return response.data;
};
