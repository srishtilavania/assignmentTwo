import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import { MDBMedia } from "mdbreact";
import { Redirect } from "react-router-dom";
import Create from "./CreateComponent";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      showName: false,
      showForm: true,
      redirect: false,
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/create" />;
    }
  };
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
    e.preventDefault();

    var formJSON = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(JSON.stringify(formJSON));
    console.log("new");
    console.log(this.props.email1);
    console.log(this.props.password1);
    this.setState({
      email: "",
      password: "",
    });
    if (
      this.props.email1 == this.state.email &&
      this.props.password1 == this.state.password
    ) {
      this.setState({
        email: "",
        password: "",
        showName: true,
        showForm: false,
      });
    } else {
      this.setState({
        email: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.showForm && (
          <MDBContainer className="card">
            <MDBRow>
              <MDBCol>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                      <h3 className="my-3">
                        <MDBIcon icon="lock" /> Login:
                      </h3>{" "}
                    </MDBCardHeader>{" "}
                    <form onSubmit={this.onSubmit}>
                      <div className="grey-text">
                        <MDBInput
                          label="Type your email"
                          icon="envelope"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          group
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Type your password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          icon="lock"
                          group
                          type="password"
                          validate
                        />
                      </div>
                      <div className="text-center mt-4">
                        <MDBBtn
                          color="light-blue"
                          className="mb-3"
                          type="submit"
                        >
                          Login{" "}
                        </MDBBtn>{" "}
                      </div>{" "}
                    </form>{" "}
                    <MDBModalFooter>
                      <div className="font-weight-light">
                        <p> Not a member ? Sign Up </p>{" "}
                        <p> Forgot Password ? </p>{" "}
                      </div>{" "}
                    </MDBModalFooter>{" "}
                  </MDBCardBody>{" "}
                </MDBCard>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBContainer>
        )}

        {this.state.showName && (
          <p>
            <MDBRow className="card1">
              <MDBCol style={{ maxWidth: "400rem" }}>
                <MDBCard>
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>Welcome!</MDBCardTitle>

                    <MDBCardText>
                      To get started, we're going to walk you through
                    </MDBCardText>
                    <button className="mb-3 button" onClick={this.setRedirect}>
                      Redirect
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </p>
        )}

        {this.renderRedirect()}
      </div>
    );
  }
}

export default Login;
