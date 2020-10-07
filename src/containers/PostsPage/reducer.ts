import produce from "immer";

import { actionTypes } from "./actions";
import { arrayToObject } from "../../utils/array";

interface IPostPageState {
  loading: boolean,
  error: boolean,
  items: any,
  page: number,
  size: number,
  total: number | null,
}

export const initialState: IPostPageState = {
  loading: false,
  error: false,
  items: null,
  page: 1,
  size: 10,
  total: null,
};

const reducer = (state = initialState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.GET_POSTS:
        draft.loading = true;
        break;

      case actionTypes.GET_POSTS_SUCCESS:
        draft.items = arrayToObject(action.response.items, '_id')
        draft.total = action.response.total;
        draft.loading = false;
        draft.error = false;
        break;

      case actionTypes.GET_POSTS_ERROR:
        draft.error = true;
        break;

      case actionTypes.SET_POSTS_PAGE:
        draft.page = action.page;
        break;

      case actionTypes.DELETE_POST:
        draft.page = action.page;
        draft.loading = true;
        break;

      case actionTypes.DELETE_POST_SUCCESS:
        draft.loading = false;
        break;

      case actionTypes.DELETE_POST_ERROR:
        draft.error = false;
        break;
    }
  });
};

export default reducer;
