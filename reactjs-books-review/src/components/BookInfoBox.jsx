import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Button } from "antd";

import { deleteBook } from "../store/book";

const Wrap = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const DescText = styled.div`
  font-size: 15px;
  font-weight: bolder;
  color: #ff5244;
`;

const DelButton = styled(Button)`
  width: 55px;
  height: 30px;
`;

const BookInfoBox = ({ item }) => {
  const dispatch = useDispatch();

  const onDelBook = () => {
    dispatch(deleteBook(item.bookId));
  };

  return (
    <Wrap>
      <Info>
        <TitleText>책 제목</TitleText>
        <DescText>{item.title}</DescText>

        <TitleText>책 내용</TitleText>
        <DescText>{item.message}</DescText>

        <TitleText>저가</TitleText>
        <DescText>{item.author}</DescText>

        <TitleText>책 링크</TitleText>
        <DescText>{item.url}</DescText>
      </Info>
      <DelButton type="danger" onClick={onDelBook}>
        삭제
      </DelButton>
    </Wrap>
  );
};

export default BookInfoBox;
