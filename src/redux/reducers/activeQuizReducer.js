

const initialState = {
	header: {
		name: 'Ololo',
		description: 'pam pam'
	},
	questions: [
		{
			title: 'Что такое?',
			text: 'Все ок',
			answers: ['Ответ 1123', 'Ответ 2314', 'Ответ 32142'],
			activeAnswer: null
		},
		{
			title: 'Что такое?',
			text: 'Все ок',
			answers: ['Ответ 1123', 'Ответ 2314', 'Ответ 32142'],
			activeAnswer: null
		},
		{
			title: 'Что такое?',
			text: 'Все ок',
			answers: ['Ответ 1123', 'Ответ 2314', 'Ответ 32142'],
			activeAnswer: null
		}
	],
}

export const activeQuizReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state
	}
}