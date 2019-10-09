import React, { Component } from "react";
import { connect } from "react-redux";
import { addInterview } from "../../store/actions/interviewActions";
import { Redirect } from "react-router-dom";

class CreateInterview extends Component {
  state = {
    company: "",
    position: "",
    description: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addInterview(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white z-depth-5">
          <h5 className="grey-text text-darken-3">Create Interview</h5>
          <div className="input-field">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="position">Position</label>
            <input type="text" id="position" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">
              Add Interview
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

// this will add the following arrow function to the props,
// which can then be called based on onSubmit or onChange which will then dispatch an action
// this will then take you to the reducer and finally the state will be updated with new data
const mapDispatchToProps = dispatch => {
  return {
    addInterview: data => dispatch(addInterview(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInterview);
