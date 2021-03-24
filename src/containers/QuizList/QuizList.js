import React, {Component} from 'react'
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import axios from "../../axios/axiosQuiz"

class QuizList extends Component {


    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
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

            this.setState({
                quizes, loading: false
            })

            console.log(response.data)
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    {
                        this.state.loading
                            ? <Loader/>
                            : <ul>{this.renderQuizes()}</ul>
                    }


                </div>
            </div>
        )
    }
}

export default QuizList