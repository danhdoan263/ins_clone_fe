import { DOMAIN_MAIN } from 'apis';
import { headerToken } from 'apis';
import axios from 'axios';

export const followUserAPI = async (data) => {
  return await axios.post(
    `${DOMAIN_MAIN}/v1/user/follow`,
    { ...data },
    headerToken
  );
};

export const unFollowUserAPI = async (user_id, otherUser_id) => {
  return await axios.delete(
    `${DOMAIN_MAIN}/v1/user/follow?user_id=${user_id}&otherUser_id=${otherUser_id}`,
    headerToken
  );
};
