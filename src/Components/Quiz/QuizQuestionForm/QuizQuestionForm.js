import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const QuizQuestionForm = (props) => {

	const dispatch = useDispatch()
	const quiz = useSelector(state => state.activeQuiz)
	
	return (
		<div className="mb-5">
			<h3>{ props.title }</h3>
			<p>{ props.text }</p>
			{ props.answers.map((answer, index) => { 
			return (
				<div className="form-check">
				<input 
					key = {`input_${props.number}_${index + 1}`}
					type="radio" 
					className="form-check-input" 
					name={`question_${props.number}`} 
					id={`answer_${props.number}_${index + 1}`} 
				/>
				<label 
					key = {`label_${props.number}_${index + 1}`}
					className="form-check-label" 
					for={`answer_${props.number}_${index + 1}`}
				>
					{answer}
				</label>
				</div>
				)}) 
			}
		</div>
	)
}

export default QuizQuestionForm

