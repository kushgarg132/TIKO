import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import usersReducer from "./users";
import trainsReducer from "./trains";
export default combineReducers({
  authReducer,
  currentUserReducer,
  usersReducer,
  trainsReducer
});
