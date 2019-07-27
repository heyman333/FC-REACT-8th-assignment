import React from "react";
import { Col, message } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Wrap = styled(Col)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
`;

const Titie = styled.div`
  flex-direction: column;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #610c29;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 0.2;
  white-space: pre-line;
`;

const SubTitie = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  color: #610c29;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  flex: 0.5;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  size: 14px;
  color: black;
  margin: 15px 0 15px;
`;

const SignInButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  background-color: ${({ loading }) =>
    loading === "true" ? "brown" : "rosybrown"};
  color: black;
  margin-top: 25px;
`;

const BottomRow = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
`;

const BottomButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: transparent;
  border: 1px rosybrown solid;
`;

const StyledTextInput = styled.input`
  outline: none;
  border: 1px solid brown;
  height: 30px;
  padding-left: 10px;
  &:focus {
    border: 1px solid orange;
  }
`;

class SigninForm extends React.Component {
  _emailInput = React.createRef();
  _passwordInput = React.createRef();

  state = {
    loading: false,
  };

  componentDidMount() {
    window.addEventListener("keydown", event => {
      if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
      }

      let handled = false;
      if (event.keyCode === 13) {
        // Handle the event with KeyboardEvent.keyCode and set handled true.
        this.onSignin();
        handled = true;
      }

      if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
      }
    });
  }

  onSignin = async () => {
    const { history } = this.props;
    const email = this._emailInput.current.value;
    const password = this._passwordInput.current.value;
    if (!email) {
      this._emailInput.current.focus();
      message.error("아이디를 입력해주세요!");
      return;
    }

    if (!password) {
      this._passwordInput.current.focus();
      message.error("비밀번호를 입력해주세요!");
      return;
    }

    this.setState({ loading: true });
    try {
      const res = await axios.post("https://api.marktube.tv/v1/me", {
        email,
        password,
      });
      console.log("token", res.data.token);
      window.localStorage.setItem("token", res.data.token);
    } catch (error) {
      message.error(`${error.response.data.error}`);
      this.setState({ loading: false });
      return;
    }

    //사인인 성공
    history.push("/");
  };

  render() {
    return (
      <Wrap>
        <Titie>
          {"LOG IN"}
          <SubTitie>{"START SEARCHING"}</SubTitie>
        </Titie>
        <Body>
          <Label htmlFor="email-input">
            Email <span style={{ color: "red" }}>*</span>
          </Label>
          <StyledTextInput
            ref={this._emailInput}
            required
            id="email-input"
            autoFocus
            type="email"
          />
          <Label htmlFor="password-input">
            Password <span style={{ color: "red" }}>*</span>
          </Label>
          <StyledTextInput
            ref={this._passwordInput}
            required
            id="password-input"
            type="password"
          />
          <SignInButton
            onClick={this.onSignin}
            loading={this.state.loading ? "true" : undefined}
            disabled={this.state.loading}
          >
            SIGN IN
          </SignInButton>
        </Body>
        <Bottom>
          <BottomRow>
            아이디를 새로 만드시겠습니까?
            <BottomButton>회원가입</BottomButton>
          </BottomRow>
          <BottomRow>
            비밀번호를 잊어버리셨습니까?
            <BottomButton>비밀번호 찾기</BottomButton>
          </BottomRow>
        </Bottom>
      </Wrap>
    );
  }
}

export default withRouter(SigninForm);
