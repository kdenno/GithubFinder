import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githuContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  REMOVE_ALERT,
  CLEAR_USERS,
  TRIGGER_ALERT,
  SET_LOADING,
} from "../ActionTypes";

const GithuState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // trigger actions to the reducer

  // Search users

  // Get user

  // Get Repos

  // Clear Users

  // Set Loading

  // return provider to our app with anything we want to be available to our app as props
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithuState;