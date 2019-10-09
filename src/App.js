import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import InterviewDetails from "./components/interviews/InterviewDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import CreateInterview from "./components/interviews/CreateInterview";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/interview/:id" component={InterviewDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateInterview} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
