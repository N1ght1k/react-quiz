import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createHeader } from '../../../redux/actions/createQuiz'

const DesignerHeader = () => {

	const header = useSelector(state => state.create.header)
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const description = event.target.description.value
		dispatch(createHeader({name: title, description: description}))
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text" 
				className="form-control m-2" 
				name="title"
				placeholder="Название опроса" 
				defaultValue={header.name} 
			/>
			<textarea 
				className="form-control m-2" 
				rows="3" 
				name="description"
				placeholder="Напишите собственный текст сюда" 
				defaultValue={header.description}>
			</textarea>
			<button type="submit" className="btn btn-primary m-2">Сохранить</button>
		</form>
	)
}

export default DesignerHeader
