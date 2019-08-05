import React from "react";
import AuthHeader from "../shared/AuthHeader";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: 100px;
`;

const Layout = styled.div.attrs({ className: "mainLayout" })``;

const MainLayout = ({ children }) => {
  return (
    <Wrap>
      <AuthHeader />
      <Layout>{children}</Layout>
    </Wrap>
  );
};

export default MainLayout;
