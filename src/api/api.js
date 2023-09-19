import axios from "axios";
// const local = "http://localhost:5000";
const local =
  "https://cors-anywhere.herokuapp.com/https://multivendor-backend-eight.vercel.app";
const api = axios.create({
  baseURL: `${local}/api`,
});
export default api;
