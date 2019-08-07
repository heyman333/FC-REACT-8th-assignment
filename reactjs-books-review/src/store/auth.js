export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FULFILLED = "USER_LOGIN_FULFILLED";
export const USER_LOGIN_REJECTED = "USER_LOGIN_REJECTED";

export const userLogin = loginInfo => ({
  type: USER_LOGIN,
  payload: loginInfo,
});

export const userLoginFulfilled = token => ({
  type: USER_LOGIN_FULFILLED,
  payload: token,
});

export const userLoginRejected = error => ({
  type: USER_LOGIN_REJECTED,
  error,
});

const INITIAL_STATE = {
  token: "",
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case USER_LOGIN_FULFILLED:
      return {
        ...state,
        token: payload,
      };
    case USER_LOGIN_REJECTED:
      return {
        ...state,
        showError: true,
        error,
      };
    default:
      return state;
  }
};
