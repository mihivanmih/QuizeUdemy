import axios from "../../axios/axiosQuiz";
import {
    FETCH_QUIZ_SUCCES,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCES,
    FINISH_QUIZ, QUIZ_NEXT_QUESTION, QUIZE_SET_STATE, RETRY_QUIZ
} from "./actionTypes";

export function fetchQuizes() {
    return async dispatch => {

        dispatch(fetchQuizesStart())

        try {
            const response = await axios.get('quiz.json')

            let quizes = []

            Object.keys(response.data).forEach((key, index) => {
                let itemName = {
                    id: key,
                    name: `Тест №${index + 1}`
                }
                quizes = [...quizes, itemName]
            })

            dispatch(fetchQuizesSucces(quizes))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSucces(quizes) {
    return {
        type: FETCH_QUIZES_SUCCES,
        quizes: quizes
    }
}

export function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}

export function fetchQuizById(quizeId) {

    return async dispatch => {
        dispatch(fetchQuizesStart())

        try {
            const response = await axios.get(`quiz/${quizeId}.json`)
            const quiz = response.data

            dispatch(fetchQuizSuccess(quiz))

        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCES,
        quiz
    }
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZE_SET_STATE,
        answerState,
        results
    }
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ,
    }
}

export function quizNextQuestion(number) {
    return {
        type: QUIZ_NEXT_QUESTION,
        number
    }
}


export function isQuizFinished(activeQuestion, length) {
        return activeQuestion + 1 === length
}


export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {


        console.log('getState', getState().quizReducer);

        const state = getState().quizReducer

        if (state.answerState && state.answerState[answerId] === 'success') {
            return
        }

        const question = state.quiz[state.activeQuestion]
        const results = state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            dispatch(quizSetState({[answerId]: 'success'}, results))

            /*            setState({
                            answerState: { [answerId]: 'success'}
                        })*/

            const timeout = window.setTimeout(() => {

                if (isQuizFinished(state.activeQuestion, state.quiz.length)) {

                    dispatch(finishQuiz())
                    /*               this.setState({
                                       isFinish: true
                                   })*/

                } else {
                    /*             this.setState({
                                     activeQuestion: this.state.activeQuestion + 1,
                                     answerState: null,
                                     results: results
                                 })*/
                   // dispatchEvent(quizNextQuestion(state.activeQuestion + 1))
                    dispatch(quizNextQuestion(state.activeQuestion + 1))
                }

                window.clearTimeout(timeout)
            }, 100)


        } else {

            results[question.id] = 'error'
            dispatch(quizSetState({[answerId]: 'error'}, results))

            /*            this.setState({
                            answerState: { [answerId]: 'error'},
                            results: results
                        })*/
        }
    }
}

export default function retryQuizFunction() {
    return {
        type: RETRY_QUIZ,
    }
}