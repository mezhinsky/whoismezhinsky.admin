export const actionTypes = {
  GET_TAGS: "GET_TAGS",
  GET_TAGS_SUCCESS: "GET_TAGS_SUCCESS",
  GET_TAGS_ERROR: "GET_TAGS_ERROR",
  SET_TAGS_PAGE: "SET_TAGS_PAGE",

  TAG_CREATE: "TAG_CREATE",
  TAG_CREATE_SUCCESS: "TAG_CREATE_SUCCESS",
  TAG_CREATE_ERROR: "TAG_CREATE_ERROR",

  TAG_UPDATE: "TAG_UPDATE",
  TAG_UPDATE_SUCCESS: "TAG_UPDATE_SUCCESS",
  TAG_UPDATE_ERROR: "TAG_UPDATE_ERROR",

  TAG_DELETE: "TAG_DELETE",
  TAG_DELETE_SUCCESS: "TAG_DELETE_SUCCESS",
  TAG_DELETE_ERROR: "TAG_DELETE_ERROR",
};

export function getTagsAction() {
  return {
    type: actionTypes.GET_TAGS,
  };
}

export function getTagsSuccessAction(response: any) {
  return {
    type: actionTypes.GET_TAGS_SUCCESS,
    response,
  };
}

export function getTagsErrorAction(error: any) {
  return {
    type: actionTypes.GET_TAGS_ERROR,
    error,
  };
}

export function setTagsPageAction(page: number) {
  return {
    type: actionTypes.SET_TAGS_PAGE,
    page,
  };
}

export function tagCreateAction(tag: any) {
  return {
    type: actionTypes.TAG_CREATE,
    tag,
  };
}

export function tagCreateSuccessAction(response: any) {
  return {
    type: actionTypes.TAG_CREATE_SUCCESS,
    response,
  };
}

export function tagCreateErrorAction(error: any) {
  return {
    type: actionTypes.TAG_CREATE_ERROR,
    error,
  };
}

export function tagUpdateAction(index: any, tag: any) {
  console.log(index, tag)
  return {
    type: actionTypes.TAG_UPDATE,
    index,
    tag,
  };
}

export function tagUpdateSuccessAction(response: any) {
  return {
    type: actionTypes.TAG_UPDATE_SUCCESS,
    response,
  };
}

export function tagUpdateErrorAction(index: any, error: any) {
  return {
    type: actionTypes.TAG_UPDATE_ERROR,
    index,
    error,
  };
}

export function tagDeleteAction(tag: any) {
  return {
    type: actionTypes.TAG_DELETE,
    tag,
  };
}

export function tagDeleteSuccessAction(response: any) {
  return {
    type: actionTypes.TAG_DELETE_SUCCESS,
    response,
  };
}

export function tagDeleteErrorAction(tag: any, error: any) {
  return {
    type: actionTypes.TAG_DELETE_ERROR,
    tag,
  };
}