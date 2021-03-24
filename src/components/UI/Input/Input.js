import React, {Component} from 'react'
import classes from './Input.module.css'

//валидация
function isInvalid({valid, touched, shouldValidate}) {
    //если не валидный, если нужна валидация, и если мы к нему прикасались
    return !valid && shouldValidate && touched
}

const Input = props => {

    const inputType = props.type || 'text'
    let cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)) {
        cls = [...cls, classes.invalid]
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={props.type}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage}</span> : null
            }
        </div>
    )

}

export default Input