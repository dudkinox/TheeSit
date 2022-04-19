import axiosInstance from "../http/client";
import detectNumberModel from "../models/detectNumberModel";

const DetectNumberService = {
  getDetectNumber: (text: string) => {
    return axiosInstance
      .get<detectNumberModel>(`/lextoplus?text=${text}&norm=0`, {
        headers: {
          "Content-Type": "application/json",
          Apikey: "haGw7PY9jinAcNQIyDbiqQBWKSYSHM8o",
        },
      })
      .then((response) => response.data);
  },
};

export default DetectNumberService;
