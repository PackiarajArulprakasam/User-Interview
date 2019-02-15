import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Quiz from "./quiz";
import images from "./imgpath";

class App extends Component {
  state = { imageList: images };

  render() {
    const { imageList } = this.state;
    return (
      <div>
        <main className="container">
          <Switch>
            <Route
              path="/question0"
              render={props => (
                <Quiz {...props} currQuestionNum={0} image={imageList[0]} />
              )}
            />
            <Route
              path="/question1"
              render={props => (
                <Quiz {...props} currQuestionNum={1} image={imageList[1]} />
              )}
            />
            <Route
              path="/question2"
              render={props => (
                <Quiz {...props} currQuestionNum={2} image={imageList[2]} />
              )}
            />
            <Route
              path="/result"
              render={props => <Quiz {...props} image={imageList[3]} />}
            />
            <Redirect from="/" to="question0" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
