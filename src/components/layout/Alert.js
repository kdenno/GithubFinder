import React, {useContext} from 'react';
import AlertContext from "../../context/alert/alertContenxt";

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const {alert} = alertContext;
    return (
        alert !== null &&(<div className={alert.type}> {alert.msg}</div>)

        )
        
}

export default Alert;
