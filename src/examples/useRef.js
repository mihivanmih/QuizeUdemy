import classes from './Hoks.module.css'
import React, {useEffect, useRef, useState} from "react";


function computeInitialCounter() {
    console.log('функция')
    return Math.trunc(Math.random() * 20)
}


const Hoks = () => {

    const [count, setCount] = useState(1)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect( () => {
        // setCount( prev => prev + 1)
        renderCount.current++
        console.log(inputRef.current.clientWidth)
    })

    useEffect( () => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div className={classes.hooks}>
            <div>
                <h1>Хуки</h1>
                <h1>Кол-во {renderCount.current}</h1>
                <h2>Прошлое состояние {prevValue.current}</h2>
                <input ref={inputRef}  type="text" onChange={e => setValue(e.target.value)} value={value}/>
                <button onClick={focus}>Фокус</button>
            </div>
        </div>
    )
}

export default Hoks