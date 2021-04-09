import classes from './Hoks.module.css'
import React, {useEffect, useState} from "react";


function computeInitialCounter() {
    console.log('функция')
    return Math.trunc(Math.random() * 20)
}

const Hoks = () => {

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y:0
    })

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }

    useEffect( () => {
        console.log('ComponentDidMount')

        const test = window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler)
        }

    }, [])



    return (
        <div className={classes.hooks}>
            <div>
                <h1>Хуки</h1>
                <h1>Ресурс: {type}</h1>
                <button onClick={ () => setType('users')}>Пользователи</button>
                <button onClick={ () => setType('todos')}>Todos</button>
                <button onClick={ () => setType('posts')}>Посты</button>

                {/*<pre>{ JSON.stringify(data, null, 2) } </pre>*/}
                <pre>{ JSON.stringify(pos, null, 2) } </pre>
            </div>
        </div>
    )
}

export default Hoks