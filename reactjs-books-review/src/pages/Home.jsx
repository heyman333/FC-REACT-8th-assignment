import React from "react";
import { useSelector, useDispatch } from "react-redux";

import BookInfoBox from "../components/BookInfoBox";
import { fetchBooks } from "../store/book";

import MainLayout from "../components/layout/MainLayout";

const Home = ({ token }) => {
  const dispatch = useDispatch();
  const books = useSelector(({ book }) => book.books);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <MainLayout>
      <h1>내가 등록한 책</h1>
      {books.map(book => (
        <BookInfoBox item={book} key={book.bookId} />
      ))}
    </MainLayout>
  );
};

export default Home;
