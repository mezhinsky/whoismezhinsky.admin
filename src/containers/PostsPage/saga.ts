import { takeLatest, call, put, select } from "redux-saga/effects";
import { apiAxios } from '../../utils/request';

import { actionTypes, getPostsAction, getPostsSuccessAction, deletePostSuccessAction, deletePostErrorAction } from "./actions";
import { makeSelectPage } from './selectors';

import Config from '../../config';

function* changePage() {
	yield put(getPostsAction());
}

function* getPosts() {
	const page = yield select(makeSelectPage());

  const options = {
    method: "GET",
    url: `${Config.api.URL}/v1/posts?page=${page ? page : 1}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(getPostsSuccessAction(response));
  } catch (err) {
  }
}

function* deletePost(action) {

  const options = {
    method: "DELETE",
    url: `${Config.api.URL}/v1/posts/${action.id}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    yield call(apiAxios, options);
    yield put(deletePostSuccessAction(action.id));
  } catch (err) {
    yield put(deletePostErrorAction(err));
  }

}

export function* pageChangeSaga() {
	yield takeLatest(actionTypes.SET_POSTS_PAGE, changePage)
}

export function* postsSaga() {
  yield takeLatest(actionTypes.GET_POSTS, getPosts);
}

export function* deletePostSaga() {
  yield takeLatest(actionTypes.DELETE_POST, deletePost);
  yield takeLatest(actionTypes.DELETE_POST_SUCCESS, getPosts);

}