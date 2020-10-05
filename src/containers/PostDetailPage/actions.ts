export const actionTypes = {
  CLEAR_POST: 'CLEAR_POST',
  POST_ERROR: 'GET_POST_ERROR',

  GET_POST: 'GET_POST',
  GET_POST_SUCESS: 'GET_POST_SUCESS',

  UPDATE_POST: 'UPDATE_POST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',

  CREATE_POST: 'CREATE_POST',
  CREATE_POST_SUCCESS: 'CREATE_POST_SUCCESS',

  DELETE_POST: 'DELETE_POST',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
};

export function clearPostAction() {
	return {
		type: actionTypes.CLEAR_POST,
	}
}

export function getPostAction(id: string) {
	return {
		type: actionTypes.GET_POST,
		id,
	}
}

export function getPostSuccessAction(response: any) {
	return {
		type: actionTypes.GET_POST_SUCESS,
		response,
	}
}

export function postErrorAction(err: any) {
	return {
		type: actionTypes.POST_ERROR,
		err,
	}
}

export function updatePostAction(id:string, post: any) {
	return {
		type: actionTypes.UPDATE_POST,
		id,
		post,
	}
}

export function updatePostSuccessAction(response: any) {
	return {
		type: actionTypes.UPDATE_POST_SUCCESS,
		response,
	}
}

export function createPostAction(post: any) {
	return {
		type: actionTypes.CREATE_POST,
		post,
	}
}

export function createPostSuccessAction(response: any) {
	return {
		type: actionTypes.CREATE_POST_SUCCESS,
		response,
	}
}

export function deletePostAction(id: any) {
	return {
		type: actionTypes.DELETE_POST,
		id,
	}
}

export function deletePostSuccessAction() {
	return {
		type: actionTypes.DELETE_POST_SUCCESS,
	}
}