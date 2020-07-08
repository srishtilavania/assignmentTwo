import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import SignUp from "./components/SignUpcomponent";
import Login from "./components/LoginComponent";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
