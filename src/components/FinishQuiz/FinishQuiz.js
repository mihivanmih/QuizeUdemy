import React from 'react'
import classes from './FinishQuiz.module.css'
import Button from "../UI/Button/Button";

const FinishQuiz = props => {

    console.log('props.results', props.results)

    const successCount = Object.keys(props.results).reduce( (total, key) => {
        if(props.results[key] === 'success')
        {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishQuiz}>
            <ul>
                { props.quiz.map( (quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times '+ classes.error : 'fa-check ' + classes.success
                    ]

                    return (
                        <li key={index}>
                            <strong>{ index + 1 }.</strong>&nbsp; {quizItem.questuon}
                            <i className={ cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary'>Повторить</Button>
                <Button onClick={props.onRetry} type='success'>Вернуться ко всем тестам</Button>
            </div>
        </div>
    )
}

export default FinishQuiz