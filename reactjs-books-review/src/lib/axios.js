import axios from "axios";

let _instance = null;

function configureAxios() {
  if (_instance) {
    return _instance;
  }

  _instance = axios.create({
    baseURL: "https://api.marktube.tv/v1",
  });

  return _instance;
}

let _currentAuthorizationToken = null;

export const setAuthorization = token => {
  _currentAuthorizationToken = token;

  const instance = configureAxios();
  instance.defaults.headers["Content-Type"] = "application/json";
  instance.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : "";
};

export function getAuthorizationToken() {
  return _currentAuthorizationToken;
}

export default configureAxios();
