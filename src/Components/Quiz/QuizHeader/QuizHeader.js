import React from 'react'
import { useSelector } from 'react-redux'

const QuizHeader = () => {

	const quizHeader = useSelector(state => state.activeQuiz.header)

	return (
		<div>
			<h2 className="text-center">{ quizHeader.name }</h2>
			<p className="text-center">{ quizHeader.description }</p>
		</div>
	)
}

export default QuizHeader

