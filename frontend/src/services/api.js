import axios from "axios";

const api = axios.create({
  baseURL: "https://api-med-cloud.herokuapp.com/",
  timeout: 10000,
});

export default api;
