import React, {Component} from 'react'
import Button from "../../components/UI/Button/Button";
import classes from "./QuizCreator.module.css"
import {creacteControl, validateFramework, validateFormFramework} from "../../components/Form/formFramework";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axiosQuiz"
import {connect} from "react-redux";
import {createQuizeQuestion, finishCreateQuiz} from "../../store/actions/create";
import {Redirect} from "react-router-dom";

function createOptionControl(number) {
    return creacteControl({
        label: `Вариант ${number}` ,
        errorMessage: 'Вариант не может быть пустым',
        id: number
    }, {required: true})
}

function createFormControls() {
    return (
        {
            question: creacteControl({
                label: 'Введите вопрос',
                errorMessage: 'Вопрос не может быть пустым'
            }, {required: true}),
            option1: createOptionControl(1),
            option2: createOptionControl(2),
            option3: createOptionControl(3),
            option4: createOptionControl(4)
        }
    )
}

class QuizCreator extends Component {

    state = {
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls()
    }


    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {
        /*let quiz = [ ...this.state.quiz]
        const index = quiz.length + 1*/

        const {question, option1, option2, option3, option4} = this.state.formControls //деструкторизайия объекта

        const questionItem = {
            id: this.props.quiz.length + 1,
            question: question.value,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }

        this.props.createQuizeQuestion(questionItem)
      /*  quiz = [ ...quiz, questionItem]*/
        this.setState({
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })

    }

    createQuizHandler = () => {

        this.setState({
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })

        this.props.finishCreateQuiz().then(response => {
            this.props.history.push("/")
        })



    }

    onChangeHandler = (value, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.touched = true
        control.value = value
        control.valid = validateFramework(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateFormFramework(formControls)
        })

    }

    renderControls () {
        return Object.keys(this.state.formControls).map( (controlName, index) => {
            const control = this.state.formControls[controlName]


            return (
                <React.Fragment key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        type={control.type}
                        errorMessage={control.errorMessage}
                        onChange={event => this.onChangeHandler(event.target.value, controlName)}
                    />
                    { index === 1 ? <hr /> : null }
                </React.Fragment>
            )
        })
    }

    selectChangeHandler = event => {

       this.setState({
           rightAnswerId: +event.target.value
       })

    }

    render() {

        const select = <Select
            label='Выберите правильный ответ'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text:1, value:1},
                {text:2, value:2},
                {text:3, value:3},
                {text:4, value:4}
            ]}
        />

        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        { this.renderControls() }

                        { select }


                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.props.quiz.length === 0}
                        >
                            Создать тест
                        </Button>
                    </form>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        quiz: state.createReduser.quiz,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createQuizeQuestion: item => dispatch(createQuizeQuestion(item)),
        finishCreateQuiz: () => dispatch(finishCreateQuiz())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator)