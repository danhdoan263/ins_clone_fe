export const DOMAIN_MAIN = 'http://localhost:8300';
export const DOMAIN_SOCKET = 'ws://localhost:8300';

const token = localStorage.getItem('token');
export const headerToken = {
  headers: {
    token: token,
    'Content-Type': 'application/json',
  },
};
export const headerTokenUploadFile = {
  headers: {
    token: token,
    'Content-Type': 'multipart/form-data',
  },
};
