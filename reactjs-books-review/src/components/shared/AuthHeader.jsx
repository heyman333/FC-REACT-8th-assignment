import React from "react";
import { Row } from "antd";
import { Button } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrap = styled(Row)`
  display: flex;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

const AuthHeader = ({ history }) => {
  const onClickLogout = () => {
    window.localStorage.clear();
    history.replace("/signin");
  };

  return (
    <Wrap>
      <Button type="danger" onClick={onClickLogout}>
        로그아웃
      </Button>
    </Wrap>
  );
};

export default withRouter(AuthHeader);
