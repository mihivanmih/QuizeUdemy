import classes from './Hoks.module.css'
import React, {useCallback, useEffect, useMemo, useState} from "react";
import ItemsList from "./itemsList";
import Main from "./Main";
import Alert from "./Alert";
import {AlertProvider} from "./AlertContext";


function useLogger(value) {
    useEffect( () => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

const Hoks = () => {

    const input = useInput('')
    const last = useInput('')

    useLogger(input.value)
    useLogger(last.value)

    return (
        <AlertProvider>
            <div className={classes.hooks}>
                <div>


                    <input type="text" { ...input.bind } />
                    <input type="text" { ...last.bind } />

                    <button onClick={ () => {
                        input.clear()
                        last.clear()
                    }}>Очистить</button>

                    <hr />
                    <h1>{input.value} {last.value}</h1>






                    <Alert />
                    <Main />
                </div>
            </div>
        </AlertProvider>
    )
}

export default Hoks