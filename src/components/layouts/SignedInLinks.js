import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";

const SignedInLinks = props => {
  const { profile } = props;
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Add Interview</NavLink>
      </li>
      <li>
        <a onClick={props.logout}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
