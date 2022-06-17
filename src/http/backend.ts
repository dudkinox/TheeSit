import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1412",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
