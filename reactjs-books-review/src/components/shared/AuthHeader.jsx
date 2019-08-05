import React from "react";
import axios from "axios";
import { Row } from "antd";
import { Button } from "antd";
import styled from "styled-components";
import { withRouter, Link, Redirect } from "react-router-dom";

const Wrap = styled(Row)`
  display: flex;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  padding: 44px 256px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
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
  const onClickLogout = async () => {
    const token = window.localStorage.getItem("token");
    try {
      await axios.delete("https://api.marktube.tv/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.localStorage.removeItem("token");
      history.replace("/signin");
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  // TODO: redux에서 토큰 가져오는 것으로 변경
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <Wrap>
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
