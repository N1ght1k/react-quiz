import { ADD_ANSWER, ADD_QUESTION, CHANGE_ACTIVE_FORM, CHANGE_QUESTIONS, CREATE_HEADER, CREATE_QUIZ, FETCH_QUIZ } from "../actions/types"

const initialState = {
	header: {
		name: '',
		description: ''
	},
	questions: [
		{
			title: 'Что такое?',
			text: 'Все ок',
			answers: ['Ответ 1123', 'Ответ 2314', 'Ответ 32142'],
		}
	],
	activeForm: 0
}

export const createReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_QUIZ:
			return { ...state, quizes: state.quizes.concat(action.payload) }
		case FETCH_QUIZ:
			return { ...state, fetchedQuizes: action.payload }
		case CREATE_HEADER:
			return { ...state, header: action.payload }
		case ADD_QUESTION:
			return {...state, questions: state.questions.concat([action.payload]) }
		case CHANGE_ACTIVE_FORM:
			return {...state, activeForm: action.payload }
		case CHANGE_QUESTIONS:
			return {...state, questions: action.payload}
		case ADD_ANSWER:
			return {...state, questions: action.payload}
		default: return state
	}
}