import './App.css';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/Auth/Auth";
import {connect} from "react-redux";
import authReduser from "./store/reduser/auth";
import React, {Component} from "react";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/auth";
import Hoks from "./containers/Hoks/Hoks";


class App extends Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {

        let routes = (
            <Switch>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/quiz/:id'} component={Quiz}/>
                <Route path={'/hooks'} component={Hoks}/>
                <Route path={'/'} exact component={QuizList}/>
                <Redirect to={'/'} />
            </Switch>
        )

        if(this.props.isAut){
            routes = (
                <Switch>
                    <Route path={'/quiz-creator'} component={QuizCreator}/>
                    <Route path={'/quiz/:id'} component={Quiz}/>
                    <Route path={'/logout'} component={Logout}/>
                    <Route path={'/'} exact component={QuizList}/>
                    <Redirect to={'/'} />
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAut: !!state.authReduser.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
