import {combineReducers} from "redux";
import quizReducer from "./quiz";
import createReduser from "./create";
import authReduser from "./auth";

export default combineReducers({
    quizReducer,
    createReduser,
    authReduser
})