export const actionTypes = {
  GET_POSTS: "GET_POSTS",
  GET_POSTS_SUCCESS: "GET_POSTS_SUCCESS",
  GET_POSTS_ERROR: "GET_POSTS_ERROR",
  SET_POSTS_PAGE: "SET_POSTS_PAGE",

  DELETE_POST: "DELETE_POST",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_ERROR: "DELETE_POST_ERROR",
};

export function getPostsAction() {
  return {
    type: actionTypes.GET_POSTS,
  };
}

export function getPostsSuccessAction(response: any) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    response,
  };
}

export function getPostsErrorAction(error: any) {
  return {
    type: actionTypes.GET_POSTS_ERROR,
    error,
  };
}

export function setPostsPageAction(page: number) {
  return {
    type: actionTypes.SET_POSTS_PAGE,
    page,
  };
}

export function deletePostAction(id: string) {
  return {
    type: actionTypes.DELETE_POST,
    id,
  };
}

export function deletePostSuccessAction(id: string) {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    id,
  };
}

export function deletePostErrorAction(err: any) {
  return {
    type: actionTypes.DELETE_POST_ERROR,
    err,
  };
}
