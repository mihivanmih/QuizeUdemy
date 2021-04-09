import React, {useContext} from "react";
import {useAlert} from "./AlertContext";

export default function Alert() {

    const alert = useAlert()

  //  console.log("useAlert()", useAlert())

    if (!alert.visible) return null

    return (
        <div onClick={ alert.hide}>
            <p>
                {alert.text}
            </p>
        </div>
    )
}