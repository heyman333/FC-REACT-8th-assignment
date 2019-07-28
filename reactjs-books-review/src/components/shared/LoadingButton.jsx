import React from "react";
import styled from "styled-components";
import { Spin, Icon } from "antd";

const antIcon = (
  <Icon type="loading" style={{ fontSize: 24, color: "black" }} spin />
);

const Button = styled.button`
  background-color: ${({ isLoading }) => (isLoading ? "black" : "rosybrown")};
`;

const LoadingButton = ({ isLoading, children, ...props }) => {
  return (
    <Button {...props}>
      {isLoading ? <Spin indicator={antIcon} /> : children}
    </Button>
  );
};

export default LoadingButton;
