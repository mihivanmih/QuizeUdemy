import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "./actionTypes";
import axios from "../../axios/axiosQuiz";
import createReduser from "../reduser/create";

export function createQuizeQuestion(item) {

    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('quiz.json', getState().createReduser.quiz)
        dispatch(resetQuizCreation())
    }
}