import { combineReducers } from "redux";

import auth from "./auth";
import book from "./book";
import { connectRouter } from "connected-react-router";

const reducer = history =>
  combineReducers({
    auth,
    book,
    router: connectRouter(history),
  });

export default reducer;
