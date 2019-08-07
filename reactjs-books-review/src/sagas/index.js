import { all, put, takeEvery } from "redux-saga/effects";
import * as AuthActions from "../store/auth";
import * as BookActions from "../store/book";
import axios, { setAuthorization } from "../lib/axios";

function* userLoginSaga({ payload }) {
  try {
    const { data } = yield axios.post("/me", payload);
    yield put(AuthActions.userLoginFulfilled(data));
    setAuthorization(data);
  } catch (error) {
    console.log("error", error);
    yield put(AuthActions.userLoginRejected(error.response));
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
}

// 모든 listener(watcher)를 하나로 묶어준다.
// rootReducer에 묶어주는 그것과 같다고 보면 된다.
export default function* root() {
  yield all([watchBook(), watchAuth()]);
}
