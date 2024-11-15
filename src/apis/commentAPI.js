import axios from 'axios';
import { DOMAIN_MAIN } from './config';

export const commentAPI = async (post_id, commentData) => {
  const response = await axios.post(
    `${DOMAIN_MAIN}/v1/post/comment?post_id=${post_id}`,
    commentData
  );
  return response;
};

export const deleteCommentAPI = async (commentId) => {
  const res = await axios.delete(
    `${DOMAIN_MAIN}/v1/post/comment?comment_id=${commentId}`
  );
  return res;
};
