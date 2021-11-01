import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuestions, addAnswer } from '../../../redux/actions/createQuiz'

const QuestionForm = () => {
	
	const dispatch = useDispatch()
	const quiz = useSelector(state => state.create)
	const questions = quiz.questions
	const activeForm = quiz.activeForm
	const question = quiz.questions[activeForm - 1]
	const answers = question.answers
	const title = question.title
	const text = question.text

	function changeQuestion(event, field, index) {
		const value = event.target.value
		if (field === 'title')
			questions[activeForm - 1].title = value
		if (field === 'text')
			questions[activeForm - 1].text = value
		if (field === 'answer')
			questions[activeForm - 1].answers[index] = value
		dispatch(changeQuestions(questions))
	}

	function addAnswerHandler() {
		const index = answers.length
		questions[activeForm - 1].answers.push(`Ответ ${index + 1}`)
		dispatch(addAnswer(questions))
	}

	return (
		<form className="m-auto p-5 border border-primary rounded" >
			<div className="mb-1 d-grid">
				<input type="text" 
					className="form-control-lg border border-light border-1" 
					name="title"
					key={ `title_${activeForm - 1}` }
					defaultValue={ title } 
					onChange={ e => changeQuestion(e, 'title') }
				/>
			</div>
			<div className="mb-3 d-grid">
				<input type="text" 
					className="form-control-sm border border-light border-1" 
					key={ `text_${activeForm - 1}` }
					defaultValue={ text } 
					name="text"
					onChange={ e => changeQuestion(e, 'text') }
				/>
			</div>
			<div className="mb-3">
				{ answers.map((answer, index) => {
					return (
						<div className="mb-1 d-grid" key = { `${activeForm - 1}_${index}` }>
							<input 
								type="text" 
								className="form-control border border-light border-1" 
								defaultValue={ answer }
								name={ `question_ + ${index + 1}` }
								key={ `answer_${activeForm - 1}_${index}` }
								onChange={ e => changeQuestion(e, 'answer', index) }
							/>
						</div>
					)
					})
				}
			</div>
			<div className="d-grid gap-2 d-md-flex justify-content-md-start">
				<button className="btn btn-outline-primary rounded-pill" type="button" onClick={ () => addAnswerHandler() }>Добавить ответ</button>
				<button className="btn btn-outline-primary rounded-pill" type="button">Добавить ответ - "Другой"</button>
			</div>
		</form>
	)
}

export default QuestionForm
