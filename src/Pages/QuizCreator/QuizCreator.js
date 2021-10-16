import React from 'react'
import { useSelector } from 'react-redux'
import DesignerHeader from '../../Components/Designer/DesignerHeader/DesignerHeader'
import QuestionForm from '../../Components/Designer/QuestionForm/QuestionForm'
import QuestionListBar from '../../Components/Designer/QuestionListBar/QuestionListBar'

const QuizCreator = () => {

	const activeForm = useSelector(state => state.create.activeForm)

	const formHandler = () => {
		if (activeForm === 0) {
			return <DesignerHeader />
		} else {
			return <QuestionForm />
		}
	}

	return (
		<div className="row">
			<div className="col-2">
				<QuestionListBar />
			</div>
			<div className="col-10">
				<div className="d-flex">
					{ formHandler() }
				</div>
			</div>
  	</div>
	)
}

export default QuizCreator