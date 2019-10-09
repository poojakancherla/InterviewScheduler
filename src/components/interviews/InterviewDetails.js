import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const InterviewDetails = props => {
  const { data, auth } = props;
  if (!auth.uid) return <Redirect to="/login" />;
  if (data) {
    return (
      <div className="container section interview-details">
        <div className="card z-depth-3">
          <div className="card-content">
            <span className="card-title">{data.company.toUpperCase()}</span>
            <p>{data.description}</p>
          </div>
          <div className="card-action grey-text">
            <div>
              Posted by {data.authorFirstName} {data.authorLastName}
            </div>
            <div>{moment(data.createdAt.toDate()).format("llll")}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading interview details...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const interviews = state.firestore.data.interviews;
  const interview = interviews ? interviews[id] : null;
  return {
    data: interview,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "interviews"
    }
  ])
)(InterviewDetails);
