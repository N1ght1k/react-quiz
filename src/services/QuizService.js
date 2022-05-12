import axios from "axios";
import { BASE_URL } from "../Constants/Global";

const QuizService = {
  getQuizes: async function () {
    try {
      const response = await axios.get(BASE_URL + "/api/quizes");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getQuiz: async function (id) {
    try {
      const response = await axios.get(BASE_URL + "/api/quizes/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  delQuiz: async function (id) {
    try {
      const response = await axios.delete(BASE_URL + "/api/quizes/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postQuiz: async function (quiz) {
    try {
      const response = await axios.post(BASE_URL + "/api/quizes", quiz);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  patchQuiz: async function (id, quiz) {
    try {
      const response = await axios.patch(BASE_URL + "/api/quizes/" + id, quiz);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default QuizService;
