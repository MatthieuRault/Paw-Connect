import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://paw-connect-back.onrender.com/api/"
      : "http://localhost:3000/api/",
  withCredentials: true,
});

export default api;
