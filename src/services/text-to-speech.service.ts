import axiosInstance from "../http/client";
import TextToSpeechModel from "../models/textToSpeechModel";

const TextToSpeechServices = {
  getTextToSpeech(text: string) {
    return axiosInstance.get<TextToSpeechModel>(`/vaja?text=${text}&mode=st`, {
      headers: {
        "Content-Type": "application/json",
        Apikey: "haGw7PY9jinAcNQIyDbiqQBWKSYSHM8o",
      },
    });
  },
};

export default TextToSpeechServices;
