import { CREATE_QUIZ, SET_QUIZES, SET_DEL_QUIZ } from "../actions/types";
import produce from "immer";

const initialState = {
  quizes: [],
  delQuizId: "",
};

export const quizesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZES:
      return produce(state, (draft) => {
        draft.quizes = action.payload;
      });
    case SET_DEL_QUIZ:
      return produce(state, (draft) => {
        draft.delQuizId = action.payload;
      });
    default:
      return state;
  }
};
