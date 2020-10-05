import { takeLatest, call, put, select } from "redux-saga/effects";
import { apiAxios } from '../../utils/request';
import Config from '../../config';

import {
  actionTypes,
  postErrorAction,
  getPostSuccessAction,
  createPostSuccessAction,
  updatePostSuccessAction,
  deletePostSuccessAction } from "./actions";

function* postError({err}: any) {
  console.log(err)
}

function* getPost({id}: any) {
  const options = {
    method: "GET",
    url: `${Config.api.URL}/v1/posts/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(getPostSuccessAction(response));
  } catch (err) {
    yield put(postErrorAction(err));
  }
}

function* createPost({post}: any) {
  const options = {
    method: "POST",
    data: JSON.stringify(post),
    url: `${Config.api.URL}/v1/posts`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(createPostSuccessAction(response));
  } catch (err) {
    yield put(postErrorAction(err));
  }
}

function* updatePost({id, post}: any) {
  const options = {
    method: "PATCH",
    data: JSON.stringify(post),
    url: `${Config.api.URL}/v1/posts/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(updatePostSuccessAction(response));
  } catch (err) {
    yield put(postErrorAction(err));
  }
}

function* deletePost({id}: any) {
  const options = {
    method: "PATCH",
    url: `${Config.api.URL}/v1/posts/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    yield call(apiAxios, options);
    yield put(deletePostSuccessAction());
  } catch (err) {
    yield put(postErrorAction(err));
  }
}

export function* postErrorSaga() {
  yield takeLatest(actionTypes.POST_ERROR, postError);
}
export function* getPostSaga() {
  yield takeLatest(actionTypes.GET_POST, getPost);
}

export function* createPostSaga() {
  yield takeLatest(actionTypes.CREATE_POST, createPost);
}

export function* updatePostSaga() {
  yield takeLatest(actionTypes.UPDATE_POST, updatePost);
}

// export function* deletePostSaga() {
//   yield takeLatest(actionTypes.DELETE_POST, deletePost);
// }