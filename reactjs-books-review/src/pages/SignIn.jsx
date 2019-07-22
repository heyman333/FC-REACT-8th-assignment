import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

import SignInBg from "../components/SignInBg";
import SigninForm from "../components/SignInForm";

const Page = styled(Row).attrs({ type: "flex", align: "middle" })`
  height: 100vh;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 800px;
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Underline = styled.div`
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const Contents = styled(Row).attrs(() => ({
  type: "flex",
}))`
  margin-top: 50px;
  background-color: #f3f7f8;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

const SignIn = () => {
  return (
    <Page>
      <Col span={24}>
        <Content>
          <Title>MARKTUBE REVIEW SERVICE FOR BOOKS</Title>
          <SubTitle>PLEASE SHARE YOUR OPINION ON WEB DEVELOPMENT BOOKS.</SubTitle>
          <Underline />
          <Contents>
            <SignInBg />
            <SigninForm />
          </Contents>
        </Content>
      </Col>
    </Page>
  );
};

export default SignIn;
