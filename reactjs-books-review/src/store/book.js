export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_FULFILLED = "FETCH_BOOKS_FULFILLED";
export const FETCH_BOOKS_REJECTED = "FETCH_BOOKS_REJECTED";

export const POST_BOOK = "POST_BOOK";
export const POST_BOOK_FULFILLED = "POST_BOOK_FULFILLED";
export const POST_BOOK_REJECTED = "POST_BOOK_REJECTED";

export const DEL_BOOK = "DEL_BOOK";
export const DEL_BOOK_FUFILLED = "DEL_BOOK_FUFILLED";

export const deleteBook = bookId => ({
  type: DEL_BOOK,
  payload: bookId,
});

export const deleteBookFulfilled = books => ({
  type: DEL_BOOK_FUFILLED,
  payload: books,
});

export const postBook = bookInfo => ({
  type: POST_BOOK,
  payload: bookInfo,
});

export const postBookFulfilled = books => ({
  type: POST_BOOK_FULFILLED,
  payload: books,
});

export const postBookRejected = error => ({
  type: POST_BOOK_REJECTED,
  error,
});

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

export const fetchBooksFulfilled = books => ({
  type: FETCH_BOOKS_FULFILLED,
  payload: books,
});

export const fetchBooksRejected = error => ({
  type: FETCH_BOOKS_REJECTED,
  error,
});

export const INITIAL_STATE = {
  books: [],
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case FETCH_BOOKS_FULFILLED:
      return {
        ...state,
        books: payload,
      };
    case FETCH_BOOKS_REJECTED:
      return {
        ...state,
        showError: true,
        error,
      };
    case DEL_BOOK_FUFILLED:
      return {
        ...state,
        books: payload,
      };
    default:
      return state;
  }
};
