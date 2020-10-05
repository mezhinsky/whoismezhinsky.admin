import axios from 'axios';
import { ax } from '../utils/request';
import Config from '../config';


ax.interceptors.request.use(request => {

	let jsonAuth = localStorage.getItem('token')
	let auth:any = {}
	if (jsonAuth !== null) {
		auth = JSON.parse(jsonAuth);
	}

  const { accessToken } = auth;
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  request.headers['Content-Type'] = 'application/json';
  return request;
});

ax.interceptors.response.use(
  response => response,
  error => {
    switch (error.response.status) {
      case 401:
        return resetTokenAndReattemptRequest(error);
      case 403:
        return error;
      case 500:
        console.log('Server failed');
        break;
      default:
        console.log('Произошла ошибка сервера');
        return error;
    }
    return Promise.reject(error);
  },
);

let isAlreadyFetchingAccessToken = false;

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers:any = [];

function resetTokenAndReattemptRequest(error) {
  try {
    const { response: errorResponse } = error;
		let jsonAuth = localStorage.getItem('token')
		let auth:any = {}
		if (jsonAuth !== null) {
			auth = JSON.parse(jsonAuth);
		}
    const resetToken = auth.refreshToken;
    console.log('int', resetToken)

    if (!resetToken) {
      // We can't refresh, throw the error anyway
      return Promise.reject(error);
    }
    /* Proceed to the token refresh procedure
    We create a new Promise that will retry the request,
    clone all the request configuration from the failed
    request in the error object. */
    const retryOriginalRequest = new Promise(resolve => {
      /* We need to add the request retry to the queue
    since there another request that already attempt to
    refresh the token */
      addSubscriber(accessToken => {
        errorResponse.config.headers.Authorization = `Bearer ${accessToken}`;
        resolve(axios(errorResponse.config));
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;

      let jsonProfile = localStorage.getItem('profile')
      let profile:any = {}
      if (jsonProfile !== null) {
        profile = JSON.parse(jsonProfile);
      }
      const { email } = profile;

      // новый подход
      axios({
        method: 'post',
        url: `${Config.api.URL}/v1/auth/refresh-token`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: email,
          refreshToken: resetToken,
        },
      })
        .then(response => {
          // сохраним в ls
					let jsonAuth = localStorage.getItem('token')
					let tempAuth:any = {}
					if (jsonAuth !== null) {
						auth = JSON.parse(jsonAuth);
					}
          tempAuth.accessToken = response.data.accessToken;
          tempAuth.refreshToken = response.data.refreshToken;

          localStorage.setItem('token', JSON.stringify(tempAuth));

          isAlreadyFetchingAccessToken = false;
          onAccessTokenFetched(response.data.accessToken);
        })
        .catch(err => Promise.reject(err));
    }
    return retryOriginalRequest;
  } catch (err) {
    return Promise.reject(err);
  }
}

function onAccessTokenFetched(accessToken) {
  // When the refresh is successful, we start retrying the requests one by one and empty the queue
  subscribers.forEach((callback:any) => callback(accessToken));
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback);
}
