import { DOMAIN_MAIN } from 'apis/config';
import axios from 'axios';

export const postSubmitApi = async (formData, token) => {
  //   const response = await axios.post(`${DOMAIN_MAIN}/v1/post/create`, formData, {
  //     headers: {
  //       token: token,
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   return response.data;
  try {
    console.log('Sending request to:', `${DOMAIN_MAIN}/v1/post/create`);
    console.log('FormData:', formData);
    console.log('Token:', token);

    const response = await axios.post(
      `${DOMAIN_MAIN}/v1/post/create`,
      formData,
      {
        headers: {
          token: token,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log('Response received:', response);
    return response.data;
  } catch (error) {
    console.error('Error occurred during API request:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
    throw error; // Rethrow the error if needed
  }
};
