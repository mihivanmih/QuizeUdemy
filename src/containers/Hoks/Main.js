import React from "react";
import {useAlert} from "./AlertContext";

export default function Main() {


    const {show} = useAlert()

    return (
        <>
            <h1>Привет Context</h1>
            <button onClick={ () => show("Ошибка стейта")}>Показать alert</button>
        </>
    )
}