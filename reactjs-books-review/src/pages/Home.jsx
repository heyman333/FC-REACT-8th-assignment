import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import BookInfoBox from "../components/BookInfoBox";
import { fetchBooks } from "../store/book";

import MainLayout from "../components/layout/MainLayout";

const TableViewContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TableView = styled.div`
  display: flex;
  flex-wrap: wrap;

  .bookInfobox:nth-child(3n + 2) {
    margin: 20px 9.5px;
  }
`;

const Home = ({ token }) => {
  const dispatch = useDispatch();
  const books = useSelector(({ book }) => book.books);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <MainLayout>
      <h1>내가 등록한 책</h1>
      <TableViewContainer>
        {books.length > 0 ? (
          <TableView>
            {books.map(book => (
              <BookInfoBox item={book} key={book.bookId} />
            ))}
          </TableView>
        ) : (
          "추가한 책이 없습니다"
        )}
      </TableViewContainer>
    </MainLayout>
  );
};

export default Home;
