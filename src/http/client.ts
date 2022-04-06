import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.aiforthai.in.th",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
