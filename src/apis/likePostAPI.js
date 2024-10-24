import { DOMAIN_MAIN } from 'apis/config';
import axios from 'axios';

export const getLikePostAPI = async (post_id, token) => {
  const response = await axios.get(
    `${DOMAIN_MAIN}/v1/post/like?post_id=${post_id}`,
    {
      headers: {
        token: token,
      },
    }
  );
  return response.data;
};

export const likePostAPI = async (post_id, token) => {
  const response = await axios.post(
    `${DOMAIN_MAIN}/v1/post/like?post_id=${post_id}`,
    {},
    {
      headers: {
        token: token,
      },
    }
  );
  return response.data;
};
