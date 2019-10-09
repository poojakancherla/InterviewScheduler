import { Actions } from "../../utils/constants";

export const signup = userData => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(resp => {
        firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            initials: userData.firstName[0] + userData.lastName[0],
            createdAt: new Date()
          })
          .then(() => {
            dispatch({
              type: Actions.Auth.SIGNUP_SUCCESS,
              userData
            });
          })
          .catch(err => {
            dispatch({
              type: Actions.Auth.SIGNUP_FAILURE,
              err
            });
          });
      })
      .catch(err => {
        dispatch({
          type: Actions.Auth.SIGNUP_FAILURE,
          err
        });
      });
  };
};

export const login = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: Actions.Auth.LOGIN_SUCCESS,
          credentials
        });
      })
      .catch(err => {
        dispatch({
          type: Actions.Auth.LOGIN_FAILURE,
          err
        });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: Actions.Auth.LOGOUT_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: Actions.Auth.LOGOUT_FAILURE,
          err
        });
      });
  };
};
