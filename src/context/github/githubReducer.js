import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  REMOVE_ALERT,
  CLEAR_USERS,
  TRIGGER_ALERT,
  SET_LOADING,
} from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};


