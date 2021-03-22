import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz";

class Quiz extends Component {

    state = {
        results: {}, // {[id]: success error }
        isFinish: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [
            {
                id: 1,
                questuon: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {id:"1", text: 'Черный'},
                    {id:"2", text: 'Синий'},
                    {id:"3", text: 'Красный'},
                    {id:"4", text: 'Зеленый'},
                ]
            },
            {
                id: 2,
                questuon: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                answers: [
                    {id:"1", text: '1700'},
                    {id:"2", text: '1702'},
                    {id:"3", text: '1703'},
                    {id:"4", text: '1803'},
                ]
            }
        ]
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

    componentDidMount() {
        console.log('Quize ID = ', this.props.match.params.id)
    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.isFinish
                            ? <FinishQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry ={this.retryHandler}
                            />
                            : <ActiveQuiz questuon={this.state.quiz[this.state.activeQuestion].questuon}
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