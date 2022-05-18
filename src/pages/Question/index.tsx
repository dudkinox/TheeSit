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
    var timer = 0;
    console.log(numberQuestion);

    switch (numberQuestion) {
      case 0:
        timer = 3000;
        break;
      case 1:
        timer = 3000;
        break;
      case 2:
        timer = 3000;
        break;
      case 3:
        timer = 6000;
        break;
      case 4:
        timer = 4300;
        break;
      case 5:
        timer = 6000;
        break;
      case 6:
        timer = 3000;
        break;
      case 7:
        timer = 3000;
        break;
      case 8:
        timer = 6500;
        break;
      default:
        timer = 4000;
        break;
    }
    WelcomeController.TextToSpeech(
      `${questionsList[numberQuestion].text}`,
      setAnimationAI,
      timer,
      "AnimationDefault"
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
        <span
          onClick={handleClick}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
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
              data-aos={numberQuestion === 0 ? "fade-up" : ""}
              data-aos-duration={numberQuestion === 0 ? "1000" : ""}
              data-aos-delay={numberQuestion === 0 ? "500" : ""}
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
