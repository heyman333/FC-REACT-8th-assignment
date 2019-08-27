import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MainLayout from "../MainLayout";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const reducerMock = () => ({ auth: { token: "owiejfo" } });

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducerMock) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe("<MainLayout />", () => {
  it("matches snapshot", () => {
    const utils = renderWithRedux(
      <BrowserRouter>
        <MainLayout>
          <div>MainLayout</div>
        </MainLayout>
      </BrowserRouter>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("shows header and footer when token exists", () => {
    localStorage.setItem("token", "test-token");
    const utils = renderWithRedux(
      <BrowserRouter>
        <MainLayout>
          <div>MainLayout</div>
        </MainLayout>
      </BrowserRouter>
    );
    utils.getByTestId("WRAP");
    utils.getByTestId("FOOTER");
    utils.getByTestId("HEADER");
  });
});
