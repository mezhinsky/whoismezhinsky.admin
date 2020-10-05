import produce from "immer";

import { actionTypes } from "./actions";

export const initialState = {
  profile: null,
  token: null,
  loggedIn: false,
  loading: false,
  error: false,
};


const reducer = (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.SOCIAL_SIGN_IN:
        draft.loading = true;
        break;

      case actionTypes.SOCIAL_SIGN_IN_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;

      case actionTypes.SOCIAL_SIGN_IN_ERROR:
        draft.loading = false;
        draft.error = true;
        break;

      case actionTypes.STORE_AUTH:
        draft.loggedIn = true;
        draft.profile = action.creds.user;
        draft.token = action.creds.token;
        break;
    }




  });
};

export default reducer;