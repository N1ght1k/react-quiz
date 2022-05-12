import {
  SET_ACTIVE_QUIZ,
  CHANGE_ACTIVE_ANSWER,
  SET_DEFAULT_ANSWER,
  SET_ALERT,
  CHANGE_EMPTY_ANSWERS,
} from "./types";

export function setActiveQuiz(quiz) {
  return {
    type: SET_ACTIVE_QUIZ,
    payload: quiz,
  };
}

export function changeAnswer(answers) {
  return {
    type: CHANGE_ACTIVE_ANSWER,
    payload: answers,
  };
}

export function setDefaultAnswer(answer) {
  return {
    type: SET_DEFAULT_ANSWER,
    payload: answer,
  };
}

export function setAlert(alert) {
  return {
    type: SET_ALERT,
    payload: alert,
  };
}

export function changeEmptyAnswers(emptyAnswers) {
  return {
    type: CHANGE_EMPTY_ANSWERS,
    payload: emptyAnswers,
  };
}
