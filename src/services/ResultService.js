import axios from "axios";
import { BASE_URL } from "../Constants/Global";

const ResultService = {
  getResult: async function (id) {
    try {
      const response = await axios.get(BASE_URL + "/api/results/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ResultService;
