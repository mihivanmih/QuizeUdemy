import {
    FETCH_QUIZ_SUCCES,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCES,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION,
    QUIZE_SET_STATE,
    RETRY_QUIZ
} from "../actions/actionTypes";

const initialState = {
    quizes: [],
    loading: false,
    results: {}, // {[id]: success error }
    isFinish: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: null
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCES:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_QUIZ_SUCCES:
            return {
                ...state, loading: false, quiz: action.quiz
            }
        case QUIZE_SET_STATE:
            return {
                ...state, loading: false, answerState: action.answerState, results: action.results
            }
        case FINISH_QUIZ:
            return {
                ...state, isFinish: true
            }
        case QUIZ_NEXT_QUESTION:
            return {
                ...state, activeQuestion: action.number, answerState: null
            }
        case RETRY_QUIZ:
            return {
                ...state,
                results: {}, // {[id]: success error }
                isFinish: false,
                activeQuestion: 0,
                answerState: null, // { [id]: 'success' 'error' }
            }
        default:
            return state
    }
}