import { all, put, takeEvery } from "redux-saga/effects";
import * as AuthActions from "../store/auth";
import * as BookActions from "../store/book";
import axios, { setAuthorization } from "../lib/axios";
import { message } from "antd";

function* userLogOutSaga({ payload }) {
  try {
    yield axios.delete("/me");
    payload.history.replace("/signin");
    localStorage.removeItem("token");
  } catch (error) {
    message.error(error.message);
  }
}

function* userLoginSaga({ payload }) {
  yield put(AuthActions.setLoading(true));
  try {
    const { data } = yield axios.post("/me", payload);
    yield put(AuthActions.userLoginFulfilled(data.token));
    setAuthorization(data);
    localStorage.setItem("token", data.token);
    message.success(`환영합니다 ${payload.email}님`, 1, () => {
      payload.history.push("/");
    });
  } catch (error) {
    message.error(error.message);
    yield put(AuthActions.userLoginRejected(error.response));
    yield put(AuthActions.setLoading(false));
  }
}

function* fetchBookSaga() {
  try {
    const { data } = yield axios.get("/book");
    yield put(BookActions.fetchBooks(data));
  } catch (error) {
    yield put(BookActions.fetchBooksRejected(error.response));
  }
}

function* watchBook() {
  yield takeEvery(BookActions.FETCH_BOOKS, fetchBookSaga);
}

function* watchAuth() {
  yield takeEvery(AuthActions.USER_LOGIN, userLoginSaga);
  yield takeEvery(AuthActions.USER_LOGOUT, userLogOutSaga);
}

export default function* root() {
  yield all([watchBook(), watchAuth()]);
}
