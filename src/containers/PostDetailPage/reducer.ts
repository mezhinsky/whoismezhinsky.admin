import produce from "immer";

import { actionTypes } from "./actions";


export const initialState = {
  loading: false,
  error: false,
  post: null,
};

const reducer = (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.CLEAR_POST:
        draft.post = null;
        break;

      case actionTypes.POST_ERROR:
        draft.loading = false;
        draft.error = true;
        break;

      case actionTypes.GET_POST:
        draft.loading = true;
        draft.error = false;
        break;

      case actionTypes.GET_POST_SUCESS:
        draft.loading = false;
        draft.post = action.response
        break;

      case actionTypes.CREATE_POST:
        draft.loading = true;
        break

      case actionTypes.CREATE_POST_SUCCESS:
        draft.loading = false;
        draft.post = action.response
        break

      case actionTypes.UPDATE_POST:
        draft.loading = true;
        draft.error = false;
        draft.post = action.post
        break

      case actionTypes.UPDATE_POST_SUCCESS:
        draft.loading = false;
        break

      case actionTypes.DELETE_POST:
        draft.loading = true;
        draft.error = false;
        break

      case actionTypes.DELETE_POST_SUCCESS:
        draft.loading = true;
        break
    }
  });
};

export default reducer;