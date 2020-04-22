import React, { useReducer } from "react";
import AlertContext from "./alertContenxt";
import AlertReducer from "./alertReducer";
import { REMOVE_ALERT, TRIGGER_ALERT } from "../ActionTypes";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set Alert

  const raiseAlert = (msg, type) => {
    dispatch({type: TRIGGER_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({type: REMOVE_ALERT});
    }, 5000);
  };

  // return provider to our app with anything we want to be available to our app as props
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        raiseAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
