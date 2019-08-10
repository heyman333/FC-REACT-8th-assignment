import { replace } from "connected-react-router";
import { select, call, all, put, takeLatest } from "redux-saga/effects";
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

    setAuthorization(data);
    localStorage.setItem("token", data.token);
    yield put(AuthActions.userLoginFulfilled(data.token));

    message.success(`환영합니다 ${payload.email}님`, 1);
    yield put(replace("/"));
  } catch (error) {
    message.error(error.message);
    yield put(AuthActions.userLoginRejected(error.response));
    yield put(AuthActions.setLoading(false));
  }
}

function* fetchBookSaga() {
  try {
    const { data } = yield axios.get("/book");
    yield put(BookActions.fetchBooksFulfilled(data));
  } catch (error) {
    yield put(BookActions.fetchBooksRejected(error.response));
  }
}

function* postBookSaga({ payload }) {
  try {
    const { data } = yield axios.post("/book", payload);

    if (data.bookId) {
      message.success("책 등록 성공!");
      yield call(fetchBookSaga);
    }
  } catch (error) {
    console.log("post books error", error);
  }
}

function* delBookSaga({ payload }) {
  try {
    yield axios.delete(`/book/${payload}`);
    const books = yield select(state => state.book.books);
    const afterRemoveBooks = books.filter(book => book.bookId !== payload);
    yield put(BookActions.deleteBookFulfilled(afterRemoveBooks));
  } catch (error) {
    console.log("delBookSaga eror", error);
  }
}

function* watchBook() {
  yield takeLatest(BookActions.FETCH_BOOKS, fetchBookSaga);
  yield takeLatest(BookActions.POST_BOOK, postBookSaga);
  yield takeLatest(BookActions.DEL_BOOK, delBookSaga);
}

function* watchAuth() {
  yield takeLatest(AuthActions.USER_LOGIN, userLoginSaga);
  yield takeLatest(AuthActions.USER_LOGOUT, userLogOutSaga);
}

export default function* root() {
  yield all([watchBook(), watchAuth()]);
}
