import React from "react";
import styled from "styled-components";
import _includes from "lodash/includes";
import { Input, Button, message } from "antd";
import { useDispatch } from "react-redux";

import MainLayout from "../components/layout/MainLayout";
import { postBook } from "../store/book";

const { TextArea } = Input;

const StyledTextArea = styled(TextArea).attrs({ rows: 6, maxLength: 250 })`
  width: 250px;
  margin-bottom: 20px;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 0 30px;
  align-items: center;
`;

const Label = styled.label`
  color: black;
  margin-bottom: 5px;
`;

const StyledInput = styled(Input)`
  width: 250px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin-top: 30px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const defaultTexts = {
  title: "",
  message: "",
  author: "",
  url: "",
};

const Add = () => {
  const [texts, setTexts] = React.useState(defaultTexts);
  const dispatch = useDispatch();

  const onChange = text => ({ target }) => {
    const newTexts = {
      ...texts,
      [text]: target.value,
    };

    setTexts(newTexts);
  };

  const onClickClear = () => {
    setTexts(defaultTexts);
  };

  const onAddbook = () => {
    if (_includes(texts, "")) {
      message.error("모든 항목을 채워 주세요!");
      return;
    }

    dispatch(postBook(texts));
    onClickClear();
  };

  return (
    <MainLayout>
      <FormWrap>
        <Group>
          <Label htmlFor="title">책 제목</Label>
          <StyledInput
            id="title"
            value={texts.title}
            onChange={onChange("title")}
          />
        </Group>

        <Group>
          <Label htmlFor="message">감상평</Label>
          <StyledTextArea
            id="message"
            value={texts.message}
            onChange={onChange("message")}
          />
        </Group>

        <Group>
          <Label htmlFor="author">지은이</Label>
          <StyledInput
            id="author"
            value={texts.author}
            onChange={onChange("author")}
          />
        </Group>

        <Group>
          <Label htmlFor="url">구매링크</Label>
          <StyledInput
            addonBefore="https://"
            id="url"
            value={texts.url}
            onChange={onChange("url")}
          />
        </Group>

        <ButtonWrapper>
          <Button
            type="primary"
            style={{ marginRight: 20 }}
            onClick={onAddbook}
          >
            책 추가하기
          </Button>
          <Button type="danger" onClick={onClickClear}>
            모두 지우기
          </Button>
        </ButtonWrapper>
      </FormWrap>
    </MainLayout>
  );
};

export default Add;
