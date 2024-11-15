import axios from 'axios';
import { DOMAIN_MAIN } from './config';

export const showCommentAPI = async (post_id) => {
  const response = await axios.get(
    `${DOMAIN_MAIN}/v1/post/comment?post_id=${post_id}`
  );
  return response.data.comment;
};
