import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToogle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {

    state = {
        menu: false
    }

    toogleMenuHandlerr = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onClickHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {

        return (
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClickHandler={this.onClickHandler}
                />

                <MenuToogle
                    onToggle={this.toogleMenuHandlerr}
                    isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout