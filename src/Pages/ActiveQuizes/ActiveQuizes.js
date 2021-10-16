import React from 'react'
import QuizList from '../../Components/QuizList/QuizList'

const ActiveQuizes = () => {

	return (
		<div className="row justify-content-md-center">
			<div className="col-md-auto">
				<h3>Список опросов:</h3>
				<QuizList type='active'/>
			</div>
		</div>
	)
}

export default ActiveQuizes
