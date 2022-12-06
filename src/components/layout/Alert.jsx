import {BsFillInfoCircleFill} from "react-icons/bs"
import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert=()=>{
    const alterContext = useContext(AlertContext);
    const {alert}=alterContext;
    
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <BsFillInfoCircleFill />{alert.msg}
            </div>
        )
    )

};

export default Alert;