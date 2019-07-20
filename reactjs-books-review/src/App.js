import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
