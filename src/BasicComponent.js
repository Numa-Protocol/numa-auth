import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SampleApp } from "./sample-app/react-js-sample.js";

export class BasicComponent extends Component {
  onLoginClick() {
    SampleApp.onLoginClick();
  }

  render() {
    return (
      <div>
        <div className="wrapping-box-container">
          <div id="controls"  className="controls">
            <button id="login-button"
              onClick={ this.onLoginClick }
              className="big-button" >
                Login
            </button>
            <p id="status">Initializing...</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BasicComponent />, document.getElementById("root")
);
