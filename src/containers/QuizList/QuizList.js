import React, {Component} from 'react'
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios/axiosQuiz"
import quizReducer from "../../store/reduser/quiz";
import {connect} from "react-redux";
import {fetchQuizes} from "../../store/actions/quiz";

class QuizList extends Component {

/*
    state = {
        quizes: [],
        loading: true
    }*/

    renderQuizes() {
        return this.props.quizes.map((quiz) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>

                </li>
            )
        })
    }


    async componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    {
                        this.props.loading && this.props.quizes.length !== 0
                            ? <Loader/>
                            : <ul>{this.renderQuizes()}</ul>
                    }


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quizes: state.quizReducer.quizes,
        loading: state.quizReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)