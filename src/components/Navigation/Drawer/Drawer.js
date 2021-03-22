import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: true},
    {to: '/quiz-creator', label: 'Создать тест', exact: true},
]

class Drawer extends Component {


    renderLinks() {
        return links.map( (link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={ this.props.onClickHandler }
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        let cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls = [ ...cls, classes.close]
        }


        return (

            <>

                <nav className={cls.join(" ")}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>

                {
                    this.props.isOpen ? <Backdrop onClick={ this.props.onClickHandler }/> : null
                }


            </>
        )
    }
}

export default Drawer