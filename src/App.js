import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// imperative write the HOW

// don't solve the problem, but rather write a solution -> WHAT

class All extends Component {
  state = {
    nextRoute: "1",
    divRef: undefined
  };

  // route change
  // writing console
  // communcatia api, xml, json, graphql, database query, dom query, dom mutation

  // delay execution of code to a point where it's not our responsibility

  handleRouteChange = (nextRoute, ref) => {
    let div = document.createElement("div");

    switch (nextRoute) {
      case "1":
        return { run: () => ref.appendChild(div) };
      case "2":
        return { run: () => this.props.history.push("/second") };
      default:
        return;
    }
  };

  render() {
    return (
      <div
        ref={ref => {
          if (!this.state.divRef) {
            this.setState({ divRef: ref });
          }
        }}
      >
        <button
          onClick={() =>
            this.handleRouteChange(
              this.state.nextRoute,
              this.state.divRef
            ).run()
          }
        >
          login
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/first" exact render={() => <div>First</div>} />
            <Route path="/second" exact render={() => <div>Second</div>} />
          </Switch>
          <Route component={All} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
