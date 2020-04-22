import { REMOVE_ALERT, TRIGGER_ALERT } from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case TRIGGER_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
