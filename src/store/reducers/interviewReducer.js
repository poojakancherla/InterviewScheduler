import { Actions } from "../../utils/constants";
const initState = {
  interviews: []
};

const interviewReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.Interview.ADD_INTERVIEW:
      console.log("ADDED A NEW INTERVIEW", action.data);
      return state;
    case Actions.Interview.ADD_INTERVIEW_ERROR:
      console.log("ADD A NEW INTERVIEW ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default interviewReducer;
