import { combineReducers } from "redux"
import { activeQuizReducer } from "./activeQuizReducer"
import { createReducer } from "./createReducer"
import { quizesReducer } from "./quizesReducer"

export const rootReducer = combineReducers({
	quizes: quizesReducer,
	create: createReducer,
	activeQuiz: activeQuizReducer
})

