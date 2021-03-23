import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js'

class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Пароль должен быть больше 5 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLenght: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    validateControl = (value, validation) => {
        if(!validation) {
            return true
        }

        let isValue = true

        if(validation.required) {
            isValue = value.trim() !== '' && isValue
        }

        if(validation.email) {
            isValue = is.email(value)
        }

        if(validation.minLenght) {
            isValue = value.length >= validation.minLenght && isValue
        }

        return isValue

    }

    onChangeHandler = (event, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        //проходим по копии массива, уже новому
        Object.keys(formControls).forEach( name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs () {
        return Object.keys(this.state.formControls).map( (controlname, index) => {
            const control = this.state.formControls[controlname]
            return (
                <Input
                    key={index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlname)}
                />
            )
        })
    }

    render() {

        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        { this.renderInputs() }

                        <Button
                            type={'success'}
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                        <Button
                            type={'primary'}
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Зарегестрирвоаться
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Auth