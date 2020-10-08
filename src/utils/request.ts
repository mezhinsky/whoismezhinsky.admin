import axios from 'axios';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  const error:any = new Error();
  console.log('err')
  error.response = response;
  throw error;
}

function checkError(error) {
  throw parseJSON(error.response);
}

export const ax = axios.create();

export const apiAxios = options =>
  ax(options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(checkError);
