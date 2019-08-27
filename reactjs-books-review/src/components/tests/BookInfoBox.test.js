import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import BookInfoBox from "../BookInfoBox";

const bookMock = {
  title: "book title",
  message: "book message",
  author: "book author",
  url: "book url",
};

function renderWithRedux(
  ui,
  { initialState, store = createStore(() => {}) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe("<BookInfoBox />", () => {
  it("matches snapshot", () => {
    const utils = renderWithRedux(<BookInfoBox item={bookMock} />);
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the book info titles properly", () => {
    const utils = renderWithRedux(<BookInfoBox item={bookMock} />);
    utils.getByText("책 제목");
    utils.getByText("책 내용");
    utils.getByText("저자");
    utils.getByText("책 링크");
  });

  it("shows the delete and edit button", () => {
    const utils = renderWithRedux(<BookInfoBox item={bookMock} />);
    utils.getByText("삭제");
    utils.getByText("수정");
  });
});
