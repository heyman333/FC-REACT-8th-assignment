import React from "react";
import { render } from "@testing-library/react";
import LoadingButton from "../LoadingButton";

describe("<LoadingButton /> without loading", () => {
  it("matches snapshot", () => {
    const utils = render(
      <LoadingButton isLoading={false}>LoadingButton</LoadingButton>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the button title correctly", () => {
    const utils = render(
      <LoadingButton isLoading={false}>LoadingButton</LoadingButton>
    );
    utils.getByText("LoadingButton");
  });
});

describe("<LoadingButton /> with loading", () => {
  it("matches snapshot", () => {
    const utils = render(
      <LoadingButton isLoading={true}>LoadingButton</LoadingButton>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the spin correctly", () => {
    const utils = render(
      <LoadingButton isLoading={true}>LoadingButton</LoadingButton>
    );

    utils.getByTestId("SPIN");
  });
});
