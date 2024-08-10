import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a92d813f9b284331a373df81ac360666",
  },
});
