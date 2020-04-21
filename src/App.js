import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    /* this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });*/
  }
  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  raiseAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { loading, users } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={this.state.alert} />

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Fragment>
                  <Search
                    searchUser={(inputText) => this.searchUser(inputText)}
                    clearUsers={this.clearUsers}
                    showClearBtn={users.length > 0}
                    triggerAlert={(msg, type) => this.raiseAlert(msg, type)}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
