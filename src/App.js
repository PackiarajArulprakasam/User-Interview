import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Quiz from "./quiz";
import Summary from "./components/summary";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/summary" component={Summary} />
        <Route path="/" component={Quiz} />
      </Switch>
    );
  }
}

export default App;
