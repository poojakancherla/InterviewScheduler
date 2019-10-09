import { Actions } from "../../utils/constants";

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.Auth.LOGIN_SUCCESS:
      console.log("Login Success!");
      return { ...state, authError: null };
    case Actions.Auth.LOGIN_FAILURE:
      console.log("Login Failure!");
      return { ...state, authError: "Login failed!" };
    case Actions.Auth.LOGOUT_SUCCESS:
      console.log("Logout Success!");
      return state;
    case Actions.Auth.LOGOUT_FAILURE:
      console.log("Logout Failure!");
      return { ...state, authError: action.err.message };
    case Actions.Auth.SIGNUP_SUCCESS:
      console.log("Sign Up Success!");
      return state;
    case Actions.Auth.SIGNUP_FAILURE:
      console.log("Sign Up Failure!");
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
