export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_FULFILLED = "FETCH_BOOKS_FULFILLED";
export const FETCH_BOOKS_REJECTED = "FETCH_BOOKS_REJECTED";

export const POST_BOOK = "POST_BOOK";
export const POST_BOOK_FULFILLED = "POST_BOOK_FULFILLED";
export const POST_BOOK_REJECTED = "POST_BOOK_REJECTED";

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

const INITIAL_STATE = {
  books: [],
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
    default:
      return state;
  }
};
