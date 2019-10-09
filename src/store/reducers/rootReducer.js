import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import interviewReducer from "./interviewReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  interview: interviewReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
