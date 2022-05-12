import axios from "axios";
import { BASE_URL } from "../Constants/Global";

const AnswerService = {
  postAnswer: async function (answer) {
    try {
      const response = await axios.post(BASE_URL + "/api/answers", answer);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AnswerService;
