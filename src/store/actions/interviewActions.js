import { Actions } from "../../utils/constants";

export const addInterview = data => {
  // here we stop the dispatch action temporarily, and perform our async call,
  // that will fetch the data from the db and when we have the data, we will,
  // resume the action by dispatching the action with the appropriate actionname and data
  // hence, here we are returning an arrow function which will do the async call
  // then call dispatch to resume its operation
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to firestore to save the data
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("interviews")
      .add({
        ...data,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: Actions.Interview.ADD_INTERVIEW,
          data
        });
      })
      .catch(err => {
        dispatch({
          type: Actions.Interview.ADD_INTERVIEW_ERROR,
          err
        });
      });
  };
};
