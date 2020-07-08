import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LoginComponent";

class TryComponent extends React.Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };
  render() {
    return (
      <div>
        {" "}
        {this.renderRedirect()}{" "}
        <button onClick={this.setRedirect}> Redirect </button>{" "}
      </div>
    );
  }
}

export default TryComponent;
