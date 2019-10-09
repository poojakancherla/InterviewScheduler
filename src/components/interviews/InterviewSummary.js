import React from "react";
import moment from "moment";

const InterviewSummary = ({ data }) => {
  const companyImage = "./img/companies/" + data.company + ".png";

  return (
    <div className="card z-depth-5 interview-summary">
      <div className="card-content grey-text text-darken-3">
        <img src={companyImage} alt="" width="20%" />
        <p>
          Added by {data.authorFirstName} {data.authorLastName}
        </p>
        <p className="grey-text">
          {moment(data.createdAt.toDate()).format("llll")}
        </p>
      </div>
    </div>
  );
};

export default InterviewSummary;
