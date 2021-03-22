import React, {Component} from 'react'
import classes from './MenuToggle.module.css'


const MenuToogle = props => {
    let cls = [
        classes.MenuTooggle,
        'fa'
    ]

    if (props.isOpen) {
        cls = [ ...cls, 'fa-times']
        cls = [ ...cls, classes.open]
    } else {
        cls = [ ...cls, 'fa-bars']
    }

    return (
        <i
            className={ cls.join(' ')}
            onClick={ props.onToggle }
        />
    )
}

export default MenuToogle