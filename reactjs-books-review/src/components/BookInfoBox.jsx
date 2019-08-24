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
  width: 335px;
  margin: 20px 0px;
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

const ButtonWrap = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  margin-top: 20px;
`;

const BookInfoBox = ({ item }) => {
  const dispatch = useDispatch();

  const onDelBook = () => {
    dispatch(deleteBook(item.bookId));
  };

  const onEdit = () => {
    console.log("수정");
  };

  return (
    <Wrap className="bookInfobox">
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
      <ButtonWrap>
        <DelButton type="danger" onClick={onDelBook}>
          삭제
        </DelButton>
        <DelButton type="default" onClick={onEdit}>
          수정
        </DelButton>
      </ButtonWrap>
    </Wrap>
  );
};

export default BookInfoBox;
