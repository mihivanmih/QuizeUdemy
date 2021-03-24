import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz";
import axios from "../../axios/axiosQuiz"
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component {

    state = {
        results: {}, // {[id]: success error }
        isFinish: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [],
        loading: true
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState && this.state.answerState[answerId] === 'success') {
            return
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: { [answerId]: 'success'}
            })

            const timeout = window.setTimeout( ()=> {

                if(this.isQuizFinished()) {

                    this.setState({
                        isFinish: true
                    })

                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                        results: results
                    })
                }

                window.clearTimeout(timeout)
            }, 100)


        } else{

            results[question.id] = 'error'
            this.setState({
                answerState: { [answerId]: 'error'},
                results: results
            })
        }


    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            results: {}, // {[id]: success error }
            isFinish: false,
            activeQuestion: 0,
            answerState: null, // { [id]: 'success' 'error' }
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`quiz/${this.props.match.params.id}.json`, this.state.quiz)
            const quiz = response.data



            this.setState({
                quiz,
                loading: false
            })

        } catch (e){
            console.log(e)
        }
    }

    render() {

        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.loading
                            ? <Loader />
                            : this.state.isFinish
                            ? <FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry ={this.retryHandler}
                            />
                            : <ActiveQuiz
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    quizLenght={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}
                            />

                    }
                </div>
            </div>
        )
    }
}
export default Quiz