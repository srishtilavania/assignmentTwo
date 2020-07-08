import React from "react";
import { Redirect, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
} from "mdbreact";
import booster_icon from "../booster_icon.jpg";
import Login from "./LoginComponent";
var showLogin;
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      formValid: false,
      successMessage: "",
      showLogin: true,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    showLogin = true;
    e.preventDefault();

    var formJSON = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(JSON.stringify(formJSON));
    console.log(showLogin);
    this.props.onSignUp(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="card">
        <MDBCard
          className="card"
          style={{
            maxWidth: "22rem",
          }}
        >
          <MDBCardImage className="img-fluid icon" src={booster_icon} />
          <MDBCardTitle>Sign Up</MDBCardTitle>
          <MDBCardBody>
            <MDBBtn color="black" className="button">
              SIGN UP WITH GITHUB
            </MDBBtn>
            <MDBBtn color="purple" className="button">
              SIGN UP WITH GOOGLE
            </MDBBtn>
            <MDBCardText className="text-center">or</MDBCardText>{" "}
          </MDBCardBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form onSubmit={this.onSubmit}>
                  <div className="grey-text">
                    <MDBInput
                      label="Yours@example.com"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                    <MDBInput
                      label="Your Password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <MDBCardText className="text-center policy">
                    By signing up, you agree to our terms and service and
                    privacy Policy.
                  </MDBCardText>{" "}
                  <div className="text-center ">
                    <MDBBtn
                      color="purple"
                      type="submit"
                      style={{
                        maxWidth: "22rem",
                      }}
                    >
                      SIGN UP >
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBCardText className="text-center policy">
            Already have an account?
            <Link to="/login">Login</Link>
          </MDBCardText>{" "}
        </MDBCard>
      </div>
    );
  }
}

export default SignUp;
