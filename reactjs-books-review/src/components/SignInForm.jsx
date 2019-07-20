import React from "react";
import { Col } from "antd";

export default class SigninForm extends React.Component {
  _emailInput = React.createRef();
  _passwordInput = React.createRef();

  render() {
    return (
      <Col
        span={12}
        style={{
          verticalAlign: "top",
        }}
      >
        ...
      </Col>
    );
  }
}
