import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Redirect, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCardText,
  MDBCardTitle,
  MDBBox,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(15),
  },
  nextButton: {
    marginRight: theme.spacing(6),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Create(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [Pname, setProject] = React.useState("");
  const [Redirect, setRedirect] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const steps = getSteps();
  var step2 = false;

  const handleNext = (evt) => {
    evt.preventDefault();

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(`Submitting Name ${Pname}`);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const projectdetail = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") console.log("empty");
    else setProject(e.target.value);
  };

  function getSteps() {
    return ["Create Account", "Create Project", "Order Items"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return getstep1();
      case 1:
        return getstep2();
      case 2:
        return getstep3();
      default:
        return "Unknown stepIndex";
    }
  }

  function getstep1() {
    console.log(props.email1);
    return (
      <div>
        <MDBContainer>
          <MDBCardTitle>Create Account</MDBCardTitle>
          <MDBCardText>To get started, you need to create account.</MDBCardText>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <div className="grey-text">
                  <MDBInput
                    icon="user"
                    value={props.email1}
                    disabled
                    group
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }

  function getstep3() {
    console.log(Pname);
    return (
      <div>
        <MDBContainer>
          <MDBCardTitle>Final submit</MDBCardTitle>
          <MDBCardText>
            Please confirm the details and agree to the term and conditions of
            application.
          </MDBCardText>
          <MDBRow>
            <MDBCol md="6">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                ></input>
                <label class="custom-control-label" for="defaultUnchecked">
                  Agree
                </label>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }

  function getstep2() {
    return (
      <div>
        <MDBContainer>
          <MDBCardTitle>Create a new project</MDBCardTitle>
          <MDBCardText>
            Projects represent a single application that this page monitors. We
            recommend creating a project for each environmen (dev/staging/prod)
            of your application.
          </MDBCardText>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Name of your project"
                    icon="user"
                    group
                    type="text"
                    value={Pname}
                    onChange={projectdetail}
                    validate
                    error="wrong"
                    success="right"
                    required
                  />
                </div>
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </form>
              <p>Invite collaborators to your project (Optional)</p>
              <MDBTable>
                <MDBTableBody>
                  <tr>
                    <td>aaaaa@verizon.com</td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultUnchecked1"
                        ></input>
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked1"
                        ></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>aaaaa@infosys.com</td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultUnchecked2"
                        ></input>
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked2"
                        ></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>aaaaa@gmail.com</td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultUnchecked3"
                        ></input>
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked3"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All Data Recorded! Please Continue to Dashboard!
            </Typography>
            <Link to="/dashboard">
              <Button>Continue</Button>
            </Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.nextButton}
                disabled={step2 && activeStep === 1}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
