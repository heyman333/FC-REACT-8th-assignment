/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Row } from "antd";
import { Button } from "antd";
import styled from "styled-components";
import { withRouter, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorization } from "../../lib/axios";

import { setToken, userLogout } from "../../store/auth";

const Wrap = styled(Row)`
  display: flex;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  padding: 44px 256px;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const ButtonWrap = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  background-color: ivory;
  width: 200px;
  justify-content: space-between;
`;

const AuthHeader = ({ history, location }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const reduxToken = useSelector(state => state.auth.token);

  if (!reduxToken) {
    dispatch(setToken(token));
  }

  const onClickLogout = () => {
    dispatch(userLogout({ history }));
  };

  if (token) {
    setAuthorization(token);
    return (
      <Wrap data-testid="HEADER">
        <ButtonWrap>
          {location.pathname !== "/add" && (
            <li>
              <Link to="/add">
                <Button type="primary" style={{ width: 120, height: 40 }}>
                  책 추가하기
                </Button>
              </Link>
            </li>
          )}
          {location.pathname === "/add" && (
            <li>
              <Link to="/">
                <Button type="default" style={{ width: 120, height: 40 }}>
                  홈으로
                </Button>
              </Link>
            </li>
          )}
          <li>
            <Button
              type="danger"
              onClick={onClickLogout}
              style={{ width: 120, height: 40, marginLeft: 20 }}
            >
              로그아웃
            </Button>
          </li>
        </ButtonWrap>
      </Wrap>
    );
  }

  return <Redirect to="/signin" />;
};

export default withRouter(AuthHeader);
