import { Col, Form, Row } from "react-bootstrap";
import Icons from "../../components/Icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MuteIcon from "../../assets/icons/mute-icon.svg";
import MicIcon from "../../assets/icons/mic-icon.svg";
import { useEffect, useState } from "react";

export default function QuestionPage() {
  const { transcript, listening } = useSpeechRecognition();

  const [point, setPoint] = useState(0);

  useEffect(() => {
    if (transcript !== "" && !listening) {
      setPoint(Number(transcript) / 360);
    }
  }, [listening, transcript]);

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
      <h1>Question</h1>
      <h2>รายได้ครอบครัวต่อปี?</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            value={transcript}
            onChange={(e) => {
              console.log(e.target.value);

              setPoint(Number(e.target.value) / 360000);
            }}
            placeholder="จำนวน"
          />
        </Form.Group>
      </Form>
      {point > 0 ? `คะแนน = ${point}` : <></>}
    </div>
  );
}
