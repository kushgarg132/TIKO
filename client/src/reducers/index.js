import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import usersReducer from "./users";

export default combineReducers({
  authReducer,
  currentUserReducer,
  usersReducer,
});
