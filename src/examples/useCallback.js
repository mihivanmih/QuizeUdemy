import classes from './Hoks.module.css'
import React, {useCallback, useEffect, useMemo, useState} from "react";
import ItemsList from "./itemsList";



const Hoks = () => {

    const [counter, setCounter] = useState( 1)
    const [colored, setColored] = useState( false)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback( () => {
        return new Array(counter).fill( '').map((_, i) => `Элемент ${i + 1}`)
    }, [counter])

    return (
        <div className={classes.hooks}>
            <div>
                <h1>Хуки</h1>
                <h1 style={styles} >Кол-во элементов: {counter}</h1>
                <button onClick={ () => { setCounter(prev => prev +1) }}>+</button>
                <button onClick={ () => { setColored( prev => !prev) }}>Поменять цвет</button>

                <ItemsList getItems={generateItemsFromAPI}/>
            </div>
        </div>
    )
}

export default Hoks