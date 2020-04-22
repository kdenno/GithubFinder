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
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); 

 
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const raiseAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const getRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
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
                  clearUsers={clearUsers}
                  showClearBtn={users.length > 0}
                  triggerAlert={(msg, type) => raiseAlert(msg, type)}
                />
                <Users loading={loading} users={users} />
              </Fragment>
            )}
          />
          <Route path="/about" exact component={About} />
          <Route
            path="/user/:login"
            exact
            render={(props) => (
              <User
                {...props}
                getUser={(username) => getUser(username)}
                getRepos={(username) => getRepos(username)}
                loading={loading}
                user={user}
                repos={repos}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
    </GithubState>
  );
};

export default App;
