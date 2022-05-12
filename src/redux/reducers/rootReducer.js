import { combineReducers } from "redux";
import { activeQuizReducer } from "./activeQuizReducer";
import { createReducer } from "./createReducer";
import { quizesReducer } from "./quizesReducer";

const mainReducer = combineReducers({
  quizes: quizesReducer,
  create: createReducer,
  activeQuiz: activeQuizReducer,
});

export const rootReducer = (state, action) => {
  return mainReducer(state, action);
};
