import { headerToken } from 'apis';
import { DOMAIN_MAIN } from 'apis/config';
import axios from 'axios';
export const deletePostApi = async (post_id, token) => {
  console.log(post_id, token);

  const response = await axios.post(
    `${DOMAIN_MAIN}/v1/post/delete?post_id=${post_id}`,
    {},
    headerToken
  );
  return response.data;
};
