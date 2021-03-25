import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz";
import axios from "../../axios/axiosQuiz"
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import retryQuizFunction, {fetchQuizById, fetchQuizes, quizAnswerClick} from "../../store/actions/quiz";
import quizReducer from "../../store/reduser/quiz";

class Quiz extends Component {

    /*
        state = {
            results: {}, // {[id]: success error }
            isFinish: false,
            activeQuestion: 0,
            answerState: null, // { [id]: 'success' 'error' }
            quiz: [],
            loading: true
        }
    */

    /*    onAnswerClickHandler = (answerId) => {

        }*/


/*    retryHandler = () => {
        this.setState({
            results: {}, // {[id]: success error }
            isFinish: false,
            activeQuestion: 0,
            answerState: null, // { [id]: 'success' 'error' }
        })
    }*/

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader />
                            : this.props.isFinish
                            ? <FinishQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry ={this.props.retryQuiz}
                            />
                            : <ActiveQuiz
                                question={this.props.quiz[this.props.activeQuestion].question}
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                onAnswerClick={this.props.quizAnswerClick}
                                quizLenght={this.props.quiz.length}
                                answerNumber={this.props.activeQuestion + 1}
                                state={this.props.answerState}
                            />

                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        results: state.quizReducer.results,
        isFinish: state.quizReducer.isFinish,
        activeQuestion: state.quizReducer.activeQuestion,
        answerState: state.quizReducer.answerState,
        quiz: state.quizReducer.quiz,
        loading: state.quizReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuizFunction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)