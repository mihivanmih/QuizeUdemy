import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";


class Drawer extends Component {


    renderLinks(links) {
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

        let links = [
            {to: '/', label: 'Список', exact: true},
            {to: '/hooks', label: 'Хуки теория', exact: true},
        ]

        if(this.props.isAut) {
            links = [ ...links, {to: '/quiz-creator', label: 'Создать тест', exact: true}]
            links = [ ...links, {to: '/logout', label: 'Выйти', exact: true}]
        } else {
            links = [ ...links, {to: '/auth', label: 'Авторизация', exact: true}]
        }


        return (

            <>

                <nav className={cls.join(" ")}>
                    <ul>
                        { this.renderLinks(links) }
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