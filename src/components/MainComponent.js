import React, { Component } from "react";
import SignUp from "./SignUpcomponent";
import Login from "./LoginComponent";
import TryComponent from "./TryComponent";
import Create from "./CreateComponent";
import Dashboard from "./DashboardComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(email, password) {
    this.setState({
      email: email,
      password: password,
    });
  }
  render() {
    const email = this.state.email;
    const password = this.state.password;
    console.log("jhdf");
    console.log(this.state.email);
    console.log(this.state.password);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/TryComponent"
            component={() => <TryComponent />}
          />
          <Route
            exact
            path="/create"
            component={() => <Create email1={this.state.email} />}
          />
          <Route
            exact
            path="/signup"
            component={() => (
              <SignUp
                email={email}
                password={password}
                onSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            component={() => (
              <SignUp
                email={email}
                password={password}
                onSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            exact
            path="/login"
            component={() => (
              <Login
                email1={this.state.email}
                password1={this.state.password}
              />
            )}
          />
          <Route exact path="/dashboard" component={() => <Dashboard />} />
          <Redirect to="/signup" />
        </Switch>
      </div>
    );
  }
}

export default Main;
