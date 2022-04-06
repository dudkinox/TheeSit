import { Button, Col, Container, Row } from "react-bootstrap";
import Icons from "../../components/Icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MuteIcon from "../../assets/icons/mute-icon.svg";
import MicIcon from "../../assets/icons/mic-icon.svg";
import { useState } from "react";
import Questions from "../../components/Questions";

export default function QuestionPage() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [point, setPoint] = useState(0);
  const [major, setMajor] = useState("");
  const [status, setStatus] = useState(false);

  const questionsList = [
    {
      no: "1",
      text: "ผู้สัมภาษณ์เรียนที่มหาลัยแห่งไหนครับ",
    },
    {
      no: "2",
      text: "ผู้สัมภาษณ์มีสัญชาติประเทศอะไรครับ",
    },
    {
      no: "3",
      text: "ผลการเรียนเกรดเฉลี่ยเท่าไหร่ครับ",
    },
    {
      no: "4",
      text: "เคยสำเร็จการศึกษาจากที่มหาลัยใดมาก่อนหรือไม่ครับ",
    },
    {
      no: "5",
      text: "ครอบครัวมีรายได้ 1 ปี ทั้งหมดเท่าไหร่ครับ",
    },
    {
      no: "6",
      text: "ผู้สัมภาษณ์มีอายุเท่าไหร่ครับ",
    },
    {
      no: "7",
      text: "ผู้สัมภาษณ์เรียนอยู่สาขาอะไรครับ",
    },
    {
      no: "8",
      text: `ทำไมถึงเลือกมาเรียนสาขา ${major} ครับ`,
    },
    {
      no: "9",
      text: "ท่านเคยทำประโยชน์ต่อสังคม / สาธารณะ อะไรบ้าง รวมทั้งสิ้น กี่ ชั่วโมงครับ",
    },
    {
      no: "10",
      text: "ผู้สัมภาษณ์มีจำนวนกี่คนในครอบครัว",
    },
  ];

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
