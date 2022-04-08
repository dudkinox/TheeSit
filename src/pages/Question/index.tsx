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

export default function QuestionPage() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [point, setPoint] = useState(0);
  const [major, setMajor] = useState("");
  const [status, setStatus] = useState(false);
  const questionsList = QuestionsList(major);

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
      <Container>
        <Questions
          transcript={transcript}
          point={point}
          questions={questionsList[numberQuestion].text}
          no={questionsList[numberQuestion].no}
          setPoint={setPoint}
          major={major}
          setMajor={setMajor}
          status={status}
          setStatus={setStatus}
        />
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
