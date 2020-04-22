import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import "./App.css";
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
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About} />
              <Route path="/user/:login" exact render={(props) => <User {...props} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
