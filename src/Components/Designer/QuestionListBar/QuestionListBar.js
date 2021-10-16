import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addQuestion, changeActiveForm } from '../../../redux/actions/createQuiz'

const QuestionListBar = () => {

	const quiz = useSelector(state => state.create)
	const questions = quiz.questions
	const dispatch = useDispatch()

	return (
		<div className="d-grid gap-2">
			<button type="button" className="btn btn-warning btn-sm" onClick={ () => dispatch(changeActiveForm(0)) }>Заголовок</button>
			{ questions.map((question, index) => {
				return (
					<button 
						type="button" 
						className="btn btn-outline-info btn-sm" 
						onClick={ () => dispatch(changeActiveForm(index + 1)) }
						key = {index}
					>
						{index + 1}
					</button>
				)
				})
			}
			<button type="button" className="btn btn-success btn-sm" onClick={ () => dispatch(addQuestion()) }>Добавить вопрос</button>
		</div>
	)
}

export default QuestionListBar