const WelcomeController = {
  TextToSpeech(text: string) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.lang = "th-TH";
    utterThis.pitch = 0;
    utterThis.text = text;
    synth.speak(utterThis);
  },
};

export default WelcomeController;
