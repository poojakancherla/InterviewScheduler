import React from "react";
import { Link } from "react-router-dom";
import InterviewSummary from "./InterviewSummary";

const InterviewList = props => {
  const { interviews } = props;
  return (
    <div className="interview-list section">
      {interviews &&
        interviews.map(interview => {
          return (
            <Link to={"/interview/" + interview.id} key={interview.id}>
              <InterviewSummary data={interview} />
            </Link>
          );
        })}
    </div>
  );
};

export default InterviewList;
