import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import QuizHeader from '../../Components/Quiz/QuizHeader/QuizHeader'
import QuizQuestions from '../../Components/Quiz/QuizQuestions/QuizQuestions';

const ActiveQuiz = () => {
	
	const id = useParams();
	const dispatch = useDispatch()
	const quiz = useSelector(state => state.activeQuiz)

	console.log(id)
	return (
		<div className="container">
  		<div className="row justify-content-center">
				<div className="col-6">
					<QuizHeader />
					<QuizQuestions />
				</div>
			</div>
		</div>
	)
}

export default ActiveQuiz
