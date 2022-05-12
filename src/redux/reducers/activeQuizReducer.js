import {
  SET_ACTIVE_QUIZ,
  CHANGE_ACTIVE_ANSWER,
  SET_DEFAULT_ANSWER,
  SET_ALERT,
  CHANGE_EMPTY_ANSWERS,
} from "../actions/types";

const initialState = {
  // header: {
  //   name: "Ololo",
  //   description: "pam pam",
  // },
  // questions: [
  //   {
  //     title: "Что такое?",
  //     text: "Все ок",
  //     answers: ["Ответ 1123", "Ответ 2314", "Ответ 32142"],
  //     activeAnswer: null,
  //   },
  //   {
  //     title: "Что такое?",
  //     text: "Все ок",
  //     answers: ["Ответ 1123", "Ответ 2314", "Ответ 32142"],
  //     activeAnswer: null,
  //   },
  //   {
  //     title: "Что такое?",
  //     text: "Все ок",
  //     answers: ["Ответ 1123", "Ответ 2314", "Ответ 32142"],
  //     activeAnswer: null,
  //   },
  // ],
  quiz: {
    header: {
      name: "",
      description: "",
    },
    questions: [],
  },
  quizAnswer: {
    quizId: "",
    answers: [{ questionNumber: null, answer: [], otherText: "" }],
  },
  alert: false,
  emptyAnswers: [],
};

export const activeQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_QUIZ:
      return { ...state, quiz: action.payload };
    case CHANGE_ACTIVE_ANSWER:
      return {
        ...state,
        quizAnswer: { ...state.quizAnswer, answers: action.payload },
      };
    case SET_DEFAULT_ANSWER:
      return { ...state, quizAnswer: action.payload };
    case SET_ALERT:
      return { ...state, alert: action.payload };
    case CHANGE_EMPTY_ANSWERS:
      return { ...state, emptyAnswers: action.payload };
    default:
      return state;
  }
};
