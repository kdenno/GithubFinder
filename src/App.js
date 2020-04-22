import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/pages/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/alertState";

const App = (props) => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert />

            <Switch>
              <Route path="/" exact render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route path="/about" exact component={About} />
              <Route path="/user/:login" exact render={(props) => <User {...props} />} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
