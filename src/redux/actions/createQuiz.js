import {
  CREATE_QUIZ,
  ADD_QUESTION,
  CHANGE_ACTIVE_FORM,
  CHANGE_QUESTIONS,
  ADD_ANSWER,
  RESET_DESIGNER,
  CHANGE_TITLE,
  CHANGE_TEXT,
  CHANGE_TYPE,
  CHANGE_ANSWER,
  CHANGE_REQUIRE,
  CHANGE_OTHER_TEXT,
  ADD_OTHER,
  DEL_ANSWER,
  DEL_OTHER,
  SET_EDIT,
  CHANGE_QUIZ_NAME,
  CHANGE_QUIZ_DESCRIPTION,
} from "./types";

export function createQuiz(quiz) {
  return {
    type: CREATE_QUIZ,
    payload: quiz,
  };
}

export function changeQuizName(name) {
  return {
    type: CHANGE_QUIZ_NAME,
    payload: name,
  };
}

export function changeQuizDescription(desc) {
  return {
    type: CHANGE_QUIZ_DESCRIPTION,
    payload: desc,
  };
}

export function addQuestion(questions) {
  return {
    type: ADD_QUESTION,
    payload: questions,
  };
}

export function changeActiveForm(index) {
  return {
    type: CHANGE_ACTIVE_FORM,
    payload: index,
  };
}

export function changeQuestions(questions) {
  return {
    type: CHANGE_QUESTIONS,
    payload: questions,
  };
}

export function addAnswer(info) {
  return {
    type: ADD_ANSWER,
    payload: info,
  };
}

export function changeTitle(info) {
  return {
    type: CHANGE_TITLE,
    payload: info,
  };
}

export function changeText(info) {
  return {
    type: CHANGE_TEXT,
    payload: info,
  };
}

export function changeType(info) {
  return {
    type: CHANGE_TYPE,
    payload: info,
  };
}

export function changeAnswer(info) {
  return {
    type: CHANGE_ANSWER,
    payload: info,
  };
}

export function changeRequire(info) {
  return {
    type: CHANGE_REQUIRE,
    payload: info,
  };
}

export function changeOtherText(info) {
  return {
    type: CHANGE_OTHER_TEXT,
    payload: info,
  };
}

export function addOther(info) {
  return {
    type: ADD_OTHER,
    payload: info,
  };
}

export function delAnswer(info) {
  return {
    type: DEL_ANSWER,
    payload: info,
  };
}

export function delOther(info) {
  return {
    type: DEL_OTHER,
    payload: info,
  };
}

export function setEdit(quiz) {
  return {
    type: SET_EDIT,
    payload: quiz,
  };
}

export function resetDesigner() {
  return {
    type: RESET_DESIGNER,
  };
}
