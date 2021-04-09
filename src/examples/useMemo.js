import classes from './Hoks.module.css'
import React, {useEffect, useMemo, useState} from "react";


function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

const Hoks = () => {

    const [counter, setCounter] = useState( 42)
    const [colored, setColored] = useState( false)

    const computed = useMemo( () => {
        return complexCompute(counter)
    }, [counter])

    const styles = useMemo( () => {
        return {
            color: colored ? 'darkred' : 'black'
        }

    }, [colored])

    useEffect( () => {
        console.log("dddd")
    }, [styles])


    function increment() {
        setCounter(prev => prev +1)
    }

    function decriment() {
        setCounter(counter-1)
    }

    return (
        <div className={classes.hooks}>
            <div>
                <h1>Хуки</h1>
                <h1 style={styles} >Счетчик: {computed}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decriment}>-</button>
                <button onClick={ () => { setColored( prev => !prev) } }>Поменять цвет</button>
            </div>
        </div>
    )
}

export default Hoks