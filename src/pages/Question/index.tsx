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

export default function QuestionPage() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);
  const [major, setMajor] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const questionsList = QuestionsList(major);

  const handleClick = () => {
    WelcomeController.TextToSpeech(`${questionsList[numberQuestion].text}`);
  };

  return (
    <div>
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
            transcript={transcript}
            point={point}
            no={questionsList[numberQuestion].no}
            setPoint={setPoint}
            major={major}
            setMajor={setMajor}
            status={status}
            setStatus={setStatus}
          />
        </span>
        <Row className="h-50">
          <Col xs={12} className="text-center">
            <Button
              className="col-4"
              onClick={() => {
                setNumberQuestion(numberQuestion + 1);
                resetTranscript();
              }}
            >
              ถัดไป
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
