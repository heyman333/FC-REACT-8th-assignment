import "./index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../src";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Add from "./pages/Add";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <ConnectedRouter history={history}>
      <Helmet>
        <title>패스트 캠퍼스 과제-책책책 책을 읽읍시다!</title>
      </Helmet>
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={Add} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
}
