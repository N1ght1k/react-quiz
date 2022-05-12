import {
  ADD_ANSWER,
  ADD_OTHER,
  ADD_QUESTION,
  CHANGE_ACTIVE_FORM,
  CHANGE_ANSWER,
  CHANGE_OTHER_TEXT,
  CHANGE_QUESTIONS,
  CHANGE_QUIZ_DESCRIPTION,
  CHANGE_QUIZ_NAME,
  CHANGE_REQUIRE,
  CHANGE_TEXT,
  CHANGE_TITLE,
  CHANGE_TYPE,
  CREATE_HEADER,
  CREATE_QUIZ,
  DEL_ANSWER,
  DEL_OTHER,
  RESET_DESIGNER,
  SET_EDIT,
} from "../actions/types";
import produce from "immer";

const initialState = {
  header: {
    name: "Название анкеты",
    description: "Вводный текст анкеты",
  },
  questions: [
    {
      questionNumber: 1,
      questionType: "single",
      required: true,
      other: false,
      title: "Напишите свой вопрос здесь...",
      text: "Выберите один ответ",
      answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
      otherText: "Другой...",
    },
  ],
  activeForm: 0,
  edit: false,
  quizId: "",
};

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUIZ:
      return { ...state, quizes: state.quizes.concat(action.payload) };
    // case CREATE_HEADER:
    //   return { ...state, header: action.payload };
    case ADD_QUESTION:
      return { ...state, questions: action.payload };
    case CHANGE_ACTIVE_FORM:
      console.log(initialState);
      return { ...state, activeForm: action.payload };
    case CHANGE_QUESTIONS:
      return { ...state, questions: action.payload };
    case ADD_ANSWER:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].answers.push(
          action.payload.answer
        );
      });
    case DEL_ANSWER:
      return produce(state, (draft) => {
        draft.questions[action.payload.indexQuestion].answers.splice(
          action.payload.indexAnswer,
          1
        );
      });
    case ADD_OTHER:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].other = action.payload.other;
      });
    case DEL_OTHER:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].other = action.payload.other;
      });
    // return { ...state, questions: action.payload };
    case CHANGE_TITLE:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].title = action.payload.title;
      });
    case CHANGE_TEXT:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].text = action.payload.text;
      });
    case CHANGE_ANSWER:
      return produce(state, (draft) => {
        draft.questions[action.payload.indexQuestion].answers[
          action.payload.indexAnswer
        ] = action.payload.answer;
      });
    case CHANGE_TYPE:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].questionType =
          action.payload.type;
      });
    case CHANGE_REQUIRE:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].required =
          action.payload.required;
      });
    case CHANGE_OTHER_TEXT:
      return produce(state, (draft) => {
        draft.questions[action.payload.index].otherText =
          action.payload.otherText;
      });
    case SET_EDIT:
      return produce(state, (draft) => {
        draft.header = action.payload.header;
        draft.questions = action.payload.questions;
        draft.activeForm = action.payload.activeForm;
        draft.edit = action.payload.edit;
        draft.quizId = action.payload.quizId;
      });
    case CHANGE_QUIZ_NAME:
      return produce(state, (draft) => {
        draft.header.name = action.payload;
      });
    case CHANGE_QUIZ_DESCRIPTION:
      return produce(state, (draft) => {
        draft.header.description = action.payload;
      });
    case RESET_DESIGNER:
      return initialState;
    default:
      return state;
  }
};
