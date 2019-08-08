export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FULFILLED = "USER_LOGIN_FULFILLED";
export const USER_LOGIN_REJECTED = "USER_LOGIN_REJECTED";

export const USER_LOGOUT = "USER_LOGOUT";
export const SET_LOADING = "SET_LOADING";
export const SET_TOKEN = "SET_TOKEN";

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const userLogin = loginInfo => ({
  type: USER_LOGIN,
  payload: loginInfo,
});

export const userLogout = logoutInfo => ({
  type: USER_LOGOUT,
  payload: logoutInfo,
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
  loading: false,
  token: "",
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case USER_LOGIN_FULFILLED:
      return {
        ...state,
        token: payload,
        loading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case USER_LOGIN_REJECTED:
      return {
        ...state,
        showError: true,
        loading: false,
        error,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
