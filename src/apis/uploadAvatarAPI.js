import axios from 'axios';
import { DOMAIN_MAIN } from './config';
import { headerTokenUploadFile } from 'apis';
export const uploadAvatarAPI = async (formData) => {
  const response = await axios.post(
    `${DOMAIN_MAIN}/v1/user/uploads`,
    formData,
    headerTokenUploadFile
  );
  return response;
};
