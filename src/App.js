import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/pages/User";
import GithubState from "./context/github/GithubState";

const App = (props) => {
  const [alert, setAlert] = useState(null); 


  const raiseAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

 

  return (
    <GithubState>
    <Router>
      <div className="App">
        <Navbar />
        <Alert alert={alert} />

        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Fragment>
                <Search
                  triggerAlert={(msg, type) => raiseAlert(msg, type)}
                />
                <Users/>
              </Fragment>
            )}
          />
          <Route path="/about" exact component={About} />
          <Route
            path="/user/:login"
            exact
            render={(props) => (
              <User {...props} />
            )}
          />
        </Switch>
      </div>
    </Router>
    </GithubState>
  );
};

export default App;
