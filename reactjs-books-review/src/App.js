import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withAuth } from "./HOC/withAuth";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Route path="/" exact component={withAuth(Home)} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
