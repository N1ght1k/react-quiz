import { CREATE_QUIZ, FETCH_QUIZ } from "../actions/types"

const initialState = {
	quizes: [
		{
			title: 'Опрос 1',
			type: 'active',
			id: 23
		},
		{
			title: 'Опрос 2',
			type: 'active',
			id: 24
		},
		{
			title: 'Опрос 3',
			type: 'active',
			id: 25
		}
	],
	fetchedQuizes: []
}

export const quizesReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_QUIZ:
			return { ...state, quizes: state.quizes.concat(action.payload) }
		case FETCH_QUIZ:
			return { ...state, fetchedQuizes: action.payload}
		default: return state
	}
}