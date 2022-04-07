import { NavigateFunction } from "react-router-dom";

const WelcomeController = {
  TextToSpeech(text: string) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.lang = "th-TH";
    utterThis.pitch = 0;
    utterThis.text = text;
    synth.speak(utterThis);
    console.log("พูด");
  },
  goQuestions(email: string, navigate: NavigateFunction) {
    if (email !== "") {
      navigate("/questions");
    } else {
      WelcomeController.TextToSpeech("กรุณา กรอก Email ก่อนเริ่มสัมภาษณ์ครับ");
    }
  },
};

export default WelcomeController;
