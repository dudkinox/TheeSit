import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_AI,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
