import produce from "immer";

import { actionTypes } from "./actions";
import {
  arrayToObject,
  removeFromObject,
  markItemError,
} from "../../utils/array";
import { any } from "prop-types";

interface ITagsContainerState {
  loading: boolean;
  error: boolean;
  items: any;
  page: number;
  size: number;
  total: number | null;
}

export const initialState: ITagsContainerState = {
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
      case actionTypes.GET_TAGS:
        draft.loading = true;
        break;

      case actionTypes.GET_TAGS_SUCCESS:
        draft.items = arrayToObject(action.response, "id");
        draft.total = action.response.total;
        draft.loading = false;
        draft.error = false;
        break;

      case actionTypes.GET_TAGS_ERROR:
        draft.error = true;
        break;

      case actionTypes.TAG_UPDATE_ERROR:
        draft.items = markItemError(draft.items, action.index);
        break;

      case actionTypes.TAG_DELETE_ERROR:
        draft.items = markItemError(draft.items, action.tag);
        break;
    }
  });
};

export default reducer;
