import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QuizQuestionForm from '../QuizQuestionForm/QuizQuestionForm'

const QuizQuestions = () => {

	const quiz = useSelector(state => state.activeQuiz)
	const questions = quiz.questions

	return (
		<>
		{ questions.map((question, index) => { 
			return (
				<QuizQuestionForm 
					key = {index}
					title = {question.title}
					text = {question.text}
					answers = {question.answers}
					number = {index + 1}
				/>
			)})
		}
		</>
	)
}

export default QuizQuestions

