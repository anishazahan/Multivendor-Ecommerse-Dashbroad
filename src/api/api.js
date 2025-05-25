import axios from "axios";
// const local = "http://localhost:5000";
// const local = "https://multivendor-backend-eight.vercel.app";
const local = "https://multivendor-ecommerce-backend.onrender.com";
const api = axios.create({
  baseURL: `${local}/api`,
});
export default api;

// utils
