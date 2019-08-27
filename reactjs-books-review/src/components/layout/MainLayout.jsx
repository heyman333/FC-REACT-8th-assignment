import React from "react";
import AuthHeader from "../shared/AuthHeader";
import Footer from "../shared/Footer";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div.attrs({ className: "mainLayout" })`
  min-height: 500px;
`;

const MainLayout = ({ children }) => {
  return (
    <Wrap data-testid="WRAP">
      <AuthHeader />
      <Layout>{children}</Layout>
      <Footer />
    </Wrap>
  );
};

export default MainLayout;
