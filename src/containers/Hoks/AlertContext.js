import React, {useContext, useReducer, useState} from "react";
import {act} from "@testing-library/react";


const AlertContext = React.createContext()
//const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return  { ...state, visible: true, text: action.text }
        case HIDE_ALERT: return  { ...state, visible: false }
        default: return state
    }
}

/*export const useAlertToggle = () => {
    return useContext(AlertToggleContext)
}*/

export const AlertProvider = ({ children }) => {
   // const [alert, setAlert] = useState(false)
   // const toggleAlert = () => setAlert(prev => !prev)

    const [state, dispath] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    const show = text => dispath({ type: SHOW_ALERT, text: text })
    const hide = () => dispath({ type: HIDE_ALERT })

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>
            { children }
        </AlertContext.Provider>
    )
}