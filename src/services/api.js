import axios from "axios";

const api = axios.create({
  baseURL: "https://personal-api-48ic.onrender.com",
});

export default api;
