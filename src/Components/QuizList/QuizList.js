import React from 'react'
import { useSelector } from 'react-redux'
import Editbar from '../Editbar/Editbar'

const QuizList = (props) => {
	const quizes = useSelector(state => state.quizes.quizes)

	return (
		<>
			<ul className="list-group list-group-flush">
				{ quizes.map(quiz => {
					if (quiz.type === props.type) {
						return (
							<>
								<li className="list-group-item p-1" key={quiz.id}>{ quiz.title } <Editbar quizId={quiz.id}/></li>
							</>
						)
					}
					return null
					})
				}
			</ul>
		</>
	)
}

export default QuizList

