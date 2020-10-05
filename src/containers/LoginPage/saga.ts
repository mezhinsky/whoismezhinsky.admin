import { call, put, takeLatest, select } from 'redux-saga/effects';
import { apiAxios } from '../../utils/request';
import { push } from 'connected-react-router';
import Config from '../../config';

import { actionTypes, SocialSignInSuccessAction, SocialSignInErrorAction, LoadAuthSuccessAction, LoadAuthErrorAction, StoreAuthAction, SaveAuthAction } from "./actions";

function* signIn(action) {
  const data = {
    access_token: action.token
  }
  console.log(process.env.NODE_ENV)

  const options = {
    method: "POST",
    url: `${Config.api.URL}/auth/${action.provider}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data),
  };
  try {
    const creds = yield call(apiAxios, options);
    // const creds = yield res.json();
    yield put(SocialSignInSuccessAction(creds));
    yield put(StoreAuthAction(creds));
    yield put(SaveAuthAction(creds));
    yield put(push('/posts'));
  } catch (err) {
    yield put(SocialSignInErrorAction(err));
  }
}

function* saveAuth(action: any) {
  yield localStorage.setItem('profile', JSON.stringify(action.creds.user));
  yield localStorage.setItem('token', JSON.stringify(action.creds.token));
}

function* requestAuth() {
  try {
    const user = localStorage.getItem('profile');
    const token = localStorage.getItem('token');

    if (!user || !token) {
      throw new Error('Creds Error');
    }

    const creds = {
      user: JSON.parse(user),
      token: JSON.parse(token),
    };

    yield put(LoadAuthSuccessAction(creds));
  } catch (err) {
    yield put(LoadAuthErrorAction(err));
  }
}

function* storeAuth(action) {
  yield put(StoreAuthAction(action.creds));
}

function* redirectToLogin() {
  yield put(push('/login'));
}

function* signOut() {
  try {
    yield localStorage.removeItem('profile');
    yield localStorage.removeItem('token');

    yield put(push('/login'));
  } catch (error) {
    console.log('logout error', error);
  }
}

//SAGAS

export function* signInSaga() {
  yield takeLatest(actionTypes.SOCIAL_SIGN_IN, signIn);
}

export function* saveAuthSaga() {
  yield takeLatest(actionTypes.SAVE_AUTH, saveAuth);
}

export function* requestAuthCredsSaga() {
  yield takeLatest(actionTypes.REQEST_AUTH, requestAuth);
}

export function* storeAuthCredsSaga() {
  yield takeLatest(actionTypes.LOAD_AUTH_SUCCESS, storeAuth);
}

export function* redirectSaga() {
  yield takeLatest(actionTypes.LOAD_AUTH_ERROR, redirectToLogin);
}

export function* signOutSaga() {
  yield takeLatest(actionTypes.SIGN_OUT, signOut);
}