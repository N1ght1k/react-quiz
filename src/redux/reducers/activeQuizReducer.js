

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
}

export const activeQuizReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_QUIZ:
			return { ...state, quizes: state.quizes.concat(action.payload) }
		case FETCH_QUIZ:
			return { ...state, fetchedQuizes: action.payload}
		default: return state
	}
}