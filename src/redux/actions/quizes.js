import { SET_DEL_QUIZ, SET_QUIZES } from "./types";

export function setQuizes(quizes) {
  return {
    type: SET_QUIZES,
    payload: quizes,
  };
}

export function setDelQuiz(id) {
  return {
    type: SET_DEL_QUIZ,
    payload: id,
  };
}
