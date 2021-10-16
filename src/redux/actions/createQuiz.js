import { CREATE_QUIZ, CREATE_HEADER, ADD_QUESTION, CHANGE_ACTIVE_FORM, CHANGE_QUESTIONS, ADD_ANSWER } from "./types";

const newQuestionTemplate = {
	title: 'Напишите свой вопрос здесь...',
	text: 'Выберите один ответ',
	answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
}

export function createQuiz(quiz) {
	return {
		type: CREATE_QUIZ,
		payload: quiz
	}
}

export function createHeader(header) {
	return {
		type: CREATE_HEADER,
		payload: header
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		payload: newQuestionTemplate
	}
}

export function changeActiveForm(index) {
	return {
		type: CHANGE_ACTIVE_FORM,
		payload: index
	}
}

export function changeQuestions(questions) {
	return {
		type: CHANGE_QUESTIONS,
		payload: questions
	}
}

export function addAnswer(questions) {
	return {
		type: ADD_ANSWER,
		payload: questions
	}
}