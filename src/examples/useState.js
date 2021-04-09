import classes from './Hoks.module.css'
import React, {useState} from "react";


function computeInitialCounter() {
    console.log('функция')
    return Math.trunc(Math.random() * 20)
}

const Hoks = () => {

    //const [counter, setCounter] = useState( computeInitialCounter())
    const [counter, setCounter] = useState( () => {
        return computeInitialCounter()
    })

    const [state, setState] = useState( {
        title: 'Счетчик',
        date: Date.now()
    })

    function increment() {
        // setCounter(counter+1)
        setCounter( (prevCounter) => {
            return prevCounter + 1
        })
        setCounter (prev => prev + 1)
    }

    function decriment() {
        setCounter(counter-1)
    }

    const UpdateTitle = () => {
        setState( prev => {
            return {
                ...prev,
                'title': 'Новое значение'
            }
        })
    }


    return (
        <div className={classes.hooks}>
            <div>
                <h1>Хуки</h1>
                <h1>Счетчик: {counter}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decriment}>-</button>
                <button onClick={UpdateTitle}>Поменять</button>

                <pre>
                    {
                        JSON.stringify(state, null, 2)
                    }
                </pre>
            </div>
        </div>
    )
}

export default Hoks