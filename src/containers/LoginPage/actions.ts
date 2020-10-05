export const actionTypes = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",

  SOCIAL_SIGN_IN: "SOCIAL_SIGN_IN",
  SOCIAL_SIGN_IN_SUCCESS: "SOCIAL_SIGN_IN_SUCCESS",
  SOCIAL_SIGN_IN_ERROR: "SOCIAL_SIGN_IN_ERROR",

  REQEST_AUTH: "REQEST_AUTH",
  STORE_AUTH: "STORE_AUTH",
  SAVE_AUTH: "SAVE_AUTH",
  LOAD_AUTH: "LOAD_AUTH",
  LOAD_AUTH_SUCCESS: "LOAD_AUTH_SUCCESS",
  LOAD_AUTH_ERROR: "LOAD_AUTH_ERROR",
  REMOVE_AUTH: "REMOVE_AUTH",
};

export function SignInAction(pair: any) {
  return {
    type: actionTypes.SIGN_IN,
    pair,
  };
}

export function SignOutAction() {
  return {
    type: actionTypes.SIGN_OUT,
  };
}

export function SocialSignInAction(provider: string, token: string) {
  return {
    type: actionTypes.SOCIAL_SIGN_IN,
    provider,
    token,
  };
}

export function SocialSignInSuccessAction(response: any) {
  return {
    type: actionTypes.SOCIAL_SIGN_IN_SUCCESS,
    response,
  };
}

export function SocialSignInErrorAction(error: any) {
  return {
    type: actionTypes.SOCIAL_SIGN_IN_ERROR,
    error,
  };
}

export function RequestAuthAction() {
  return {
    type: actionTypes.REQEST_AUTH,
  };
}

export function StoreAuthAction(creds: any) {
  return {
    type: actionTypes.STORE_AUTH,
    creds,
  };
}

export function SaveAuthAction(creds: any) {
  return {
    type: actionTypes.SAVE_AUTH,
    creds,
  };
}

export function LoadAuthAction() {
  return {
    type: actionTypes.LOAD_AUTH,
  };
}

export function LoadAuthSuccessAction(creds: any) {
  return {
    type: actionTypes.LOAD_AUTH_SUCCESS,
    creds,
  };
}

export function LoadAuthErrorAction(error: any) {
  return {
    type: actionTypes.LOAD_AUTH_ERROR,
    error,
  };
}

export function RemoveAuthAction() {
  return {
    type: actionTypes.REMOVE_AUTH,
  };
}