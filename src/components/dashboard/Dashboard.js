import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Notifications from "./Notifications";
import InterviewList from "../interviews/InterviewList";
import CalendarComponent from "./Calendar";

class Dashboard extends Component {
  render() {
    const { interviews, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <InterviewList interviews={interviews} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
            <CalendarComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    interviews: state.firestore.ordered.interviews,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

// Compose lets us combine two or more higher order components
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "interviews",
      limit: 4,
      orderBy: ["createdAt", "desc"]
    },
    {
      collection: "notifications",
      limit: 4,
      orderBy: ["time", "desc"]
    }
  ])
)(Dashboard);
