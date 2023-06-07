import { combineReducers } from "redux";
import * as splash from "./splash";
import errorMsg from "./errorMsg";

export default combineReducers({
  errorMsg,
  ...splash,
});
