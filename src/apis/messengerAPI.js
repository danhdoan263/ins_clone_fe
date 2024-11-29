import { DOMAIN_MAIN } from 'apis';
import { headerToken } from 'apis';
import axios from 'axios';

const user_id = localStorage.getItem('_id');

export const checkRoomIdExits = async (user_id, otherUser_id) => {
  return await axios.post(
    `${DOMAIN_MAIN}/v1/chat/`,
    { user_id, otherUser_id },
    headerToken
  );
};

export const getUser = async () => {
  return await axios.get(
    `${DOMAIN_MAIN}/v1/user/follow?user_id=${user_id}`,
    headerToken
  );
};
