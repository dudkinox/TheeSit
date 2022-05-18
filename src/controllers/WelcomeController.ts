import { NavigateFunction } from "react-router-dom";

const WelcomeController = {
  TextToSpeech(
    text: string,
    setAnimationAI: React.Dispatch<React.SetStateAction<string>>,
    delay: number,
    wordingEnd: string
  ) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.lang = "th-TH";
    utterThis.pitch = 0;
    utterThis.text = text;
    synth.speak(utterThis);
    setTimeout(() => {
      setAnimationAI(wordingEnd);
    }, delay);
  },
  goQuestions(
    email: string,
    idStudent: string,
    nameStudent: string,
    navigate: NavigateFunction,
    setAnimationAI: React.Dispatch<React.SetStateAction<string>>,
    delay: number
  ) {
    if (email !== "" && idStudent !== "" && nameStudent !== "") {
      navigate("/questions", {
        state: {
          email: email,
        },
      });
    } else {
      WelcomeController.TextToSpeech(
        "กรุณา กรอกข้อมูลให้ครบถ้วน ก่อนเริ่มสัมภาษณ์ครับ",
        setAnimationAI,
        delay,
        "AnimationDefaultWelcome"
      );
    }
  },
};

export default WelcomeController;
