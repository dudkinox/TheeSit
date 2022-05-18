import { Col, Container, Row } from "react-bootstrap";
import MicIcon from "../../assets/icons/mic-icon.svg";
import SpaceIcon from "../../assets/icons/space-icon";
import Icons from "../../components/Icons";
import AInormal from "../../assets/png/นั่ง1.svg";
import AIwelcome from "../../assets/png/นั่ง3.svg";
import AIspeech from "../../assets/svg/พูด.svg";
import AIhand from "../../assets/svg/ผายมือ.svg";
import VoiceIcon from "../../assets/icons/voice-icon.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MuteIcon from "../../assets/icons/mute-icon.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeController from "../../controllers/WelcomeController";
import { TypeButton } from "../../enum/ButtonEnum";

export default function Welcome() {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [email, setEmail] = useState("");
  const [idStudent, setIdStudent] = useState("");
  const [nameStudent, setNameStudent] = useState("");
  const navigate = useNavigate();
  const [AI, setAI] = useState(AInormal);
  const [speak, setSpeak] = useState(false);
  const [AnimationAI, setAnimationAI] = useState("AnimationDefaultWelcome");

  const handleClick = () => {
    setSpeak(true);
    WelcomeController.TextToSpeech(
      "ท่านผู้เข้าสอบ กดเปิดไมที่ด้านบนขวาของ จอ แล้วรบกวนพูดคำว่า เริ่มสัมภาษณ์ เพื่อเข้าสู่การสัมภาษณ์ครับ",
      setAnimationAI,
      5000,
      "AnimationDefaultWelcome"
    );
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        if (i % 2 === 0) {
          setAI(AInormal);
        } else {
          setAI(AIspeech);
        }
      }, 500 * i);
    }
    setTimeout(() => {
      setAI(AIhand);
    }, 500 * 19);
    setSpeak(false);
  };

  useEffect(() => {
    if (transcript === "เริ่มสัมภาษณ์" && !listening) {
      WelcomeController.goQuestions(
        email,
        idStudent,
        nameStudent,
        navigate,
        setAnimationAI,
        1000
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening, transcript]);

  useEffect(() => {
    if (!speak) {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          if (i % 2 === 0) {
            setAI(AInormal);
          } else {
            setAI(AIwelcome);
          }
        }, 2000 * i);
      }
      setTimeout(() => {
        setAI(AIwelcome);
      }, 2000 * 19);
    }
  }, [speak]);

  if (!browserSupportsSpeechRecognition) {
    return <span>browser ไม่รองรับการโต้ตอบ AI ลองใช้ Google Chrome</span>;
  }

  const inputStyle = {
    background: "#F0F0F0",
    boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.41)",
    borderRadius: "52.5px",
    margin: "20px",
    height: "40px",
  };

  return (
    <>
      <Row>
        <Col xs={11}>
          <SpaceIcon />
        </Col>
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
              type={TypeButton.BUTTON}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col
          xs={6}
          className="text-center"
          style={{
            position: "relative",
            height: "83px",
            left: "100px",
            top: "100px",
          }}
        >
          <Container>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 50,
                color: "rgba(0, 0, 0, 0.8)",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
              }}
            >
              กรุณากรอกข้อมูลให้ครบถ้วน
            </p>
            <Row>
              <Col data-aos="fade-right" data-aos-delay="300">
                <input
                  type="text"
                  placeholder="รหัสนักศึกษา"
                  style={inputStyle}
                  className="form-control"
                  onChange={(e) => setIdStudent(e.target.value)}
                  value={idStudent}
                />
              </Col>
              <Col data-aos="fade-left" data-aos-delay="600">
                <input
                  type="text"
                  placeholder="ชื่อ - สกุล"
                  className="form-control"
                  style={inputStyle}
                  onChange={(e) => setNameStudent(e.target.value)}
                  value={nameStudent}
                />
              </Col>
            </Row>
            <input
              data-aos="fade-up"
              data-aos-delay="1000"
              type="text"
              className="form-control"
              placeholder="E-mail"
              style={inputStyle}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Row className="mt-4" data-aos="flip-up" data-aos-delay="1500">
              <Col xs={5}>
                <Icons className="mt-2 " icon={VoiceIcon} alt="VoiceIcon" />
                <span
                  style={{
                    position: "absolute",
                    fontWeight: 400,
                    fontSize: 36,
                    color: "#5077B0",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  &emsp;พูดว่า "
                  {transcript === "" ? "เริ่มสัมภาษณ์" : transcript}"
                </span>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs={6}
          className="text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          onClick={handleClick}
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <Icons icon={AI} alt="AI" />
        </Col>
      </Row>
    </>
  );
}
