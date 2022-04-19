import axiosInstance from "../http/client";
import detectClassificationModel from "../models/detectClassificationModel";

const DetectClassificationService = {
  getDetectClassification: (text: string, rate: string) => {
    return axiosInstance
      .get<detectClassificationModel>(
        `/tagsuggestion?text=${text}&numtag=${rate}`,
        {
          headers: {
            "Content-Type": "application/json",
            Apikey: "haGw7PY9jinAcNQIyDbiqQBWKSYSHM8o",
          },
        }
      )
      .then((response) => response.data);
  },
};

export default DetectClassificationService;
