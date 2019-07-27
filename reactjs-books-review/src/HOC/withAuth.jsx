import React from "react";
import { Redirect } from "react-router-dom";

export function withAuth(Component) {
  return props => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Redirect to="/signin" />;
    }

    return <Component {...props} token={token} />;
  };
}
