import { Button, Col, Container, Row } from "react-bootstrap";
import Icons from "../../components/Icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MuteIcon from "../../assets/icons/mute-icon.svg";
import MicIcon from "../../assets/icons/mic-icon.svg";
import { useState } from "react";
import Questions from "../../components/Questions";
import "../../Themes/questions.css";
import QuestionsList from "../../controllers/QuestionController";
import WelcomeController from "../../controllers/WelcomeController";
import EmailService from "../../services/email.service";
import { useLocation, useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);
  const [major, setMajor] = useState<string>("");
  const { state } = useLocation();
  const questionsList = QuestionsList(major);
  const [animationsAI, setAnimationAI] = useState<string>("AnimationDefault");
  const navigator = useNavigate();

  const handleClick = () => {
    setAnimationAI("AnimationAI");
    WelcomeController.TextToSpeech(
      `${questionsList[numberQuestion].text}`,
      setAnimationAI,
      3000
    );
  };

  const sendEmail = () => {
    const email = state as { email: string };
    let sum = "";
    if (point >= 45) {
      sum = "ผ่านเกณฑ์ประเมิน";
    } else {
      sum = "ไม่ผ่านเกณฑ์ประเมิน";
    }
    EmailService.sendEmail(major, email.email, sum).then((res) => {
      navigator("/finish");
    });
  };

  return (
    <div id={animationsAI}>
      <Row>
        <Col xs={11}></Col>
        <Col xs={1}>
          {listening ? (
            <Icons
              onClick={SpeechRecognition.startListening}
              className="my-3"
              icon={MicIcon}
              alt="microphone"
            />
          ) : (
            <Icons
              onClick={SpeechRecognition.startListening}
              className="my-3"
              icon={MuteIcon}
              alt="microphone"
            />
          )}
        </Col>
      </Row>
      <Container style={{ position: "relative", top: 500 }}>
        <span onClick={handleClick}>
          <Questions
            point={point}
            no={questionsList[numberQuestion].no}
            setPoint={setPoint}
            major={major}
            setMajor={setMajor}
            transcript={transcript}
          />
        </span>
        <Row className="h-50">
          <Col xs={12} className="text-center">
            <Button
              variant={numberQuestion === 9 ? "success" : "primary"}
              className="col-4"
              onClick={() => {
                if (numberQuestion === 9) {
                  sendEmail();
                } else {
                  setNumberQuestion(numberQuestion + 1);
                }
                resetTranscript();
              }}
            >
              {numberQuestion === 9 ? "เสร็จสิ้น" : "ถัดไป"}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
