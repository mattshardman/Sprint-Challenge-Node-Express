import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Project from "./components/Project";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/project" render={(props) => <Project {...this.props} {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
