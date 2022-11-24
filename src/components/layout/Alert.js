import {BsFillInfoCircleFill} from "react-icons"
import React, { useContext } from "react";

const Alert=()=>{
    const alterContext = useContext(AlertContext);
    const {alert}=AlertContext;
    
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <BsFillInfoCircleFill />{alert.msg}
            </div>
        )
    )

};

export default Alert;