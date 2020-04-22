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

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // trigger actions to the reducer

  // Search users

  const searchUser = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({type:SEARCH_USERS, payload: res.data.items});
 
  };

  // Get user

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => dispatch({type: SET_LOADING})

  // return provider to our app with anything we want to be available to our app as props
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
