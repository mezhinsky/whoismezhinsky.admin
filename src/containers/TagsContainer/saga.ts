import { takeLatest, call, put, select } from "redux-saga/effects";
import { apiAxios } from '../../utils/request';

import { actionTypes, getTagsAction, getTagsSuccessAction, tagCreateSuccessAction, tagUpdateSuccessAction, tagUpdateErrorAction, tagDeleteSuccessAction, tagDeleteErrorAction } from "./actions";
import { makeSelectPage } from './selectors';

import Config from '../../config';

function* getTags() {
  const options = {
    method: "GET",
    url: `${Config.api.URL}/v1/tags`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(getTagsSuccessAction(response));
  } catch (err) {
  }
}

function* createTag({ tag }: any) {
  tag.slug = tag.name;
  const options = {
    method: "POST",
    data: JSON.stringify(tag),
    url: `${Config.api.URL}/v1/tags`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(tagCreateSuccessAction(response));
    yield put(getTagsAction());
  } catch (err) {
  }
}

function* updateTag({ index, tag }: any) {
  tag.slug = tag.name;

  const options = {
    method: "PATCH",
    data: JSON.stringify(tag),
    url: `${Config.api.URL}/v1/tags/${tag.id}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(tagUpdateSuccessAction(response));
    yield put(getTagsAction());
  } catch (err) {
    yield put(tagUpdateErrorAction(tag, err));
  }
}

function* deleteTag({ tag }: any) {
  const options = {
    method: "DELETE",
    url: `${Config.api.URL}/v1/tags/${tag.id}`,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try {
    const response = yield call(apiAxios, options);
    yield put(tagDeleteSuccessAction(response));
    yield put(getTagsAction());
  } catch (err) {
    yield put(tagDeleteErrorAction(tag, err));
  }
}

export function* tagsSaga() {
  yield takeLatest(actionTypes.GET_TAGS, getTags);
  yield takeLatest(actionTypes.TAG_CREATE, createTag);
  yield takeLatest(actionTypes.TAG_UPDATE, updateTag);
  yield takeLatest(actionTypes.TAG_DELETE, deleteTag);
}