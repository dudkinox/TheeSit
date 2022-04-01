import { Col, Row } from "react-bootstrap";
import MicIcon from "../../assets/icons/mic-icon.svg";
import SpaceIcon from "../../assets/icons/space-icon";
import Icons from "../../components/Icons";
import AI from "../../assets/png/นั่ง1.svg";

export default function Welcome() {
  return (
    <>
      <Row>
        <Col xs={11}>
          <SpaceIcon />
        </Col>
        <Col xs={1}>
          <Icons className="my-3" icon={MicIcon} alt="microphone" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          xs={6}
          className="text-center"
          style={{
            position: "relative",
            height: "83px",
            left: "273px",
            top: "213px",
          }}
        >
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
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            style={{
              background: "#F0F0F0",
              boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.41)",
              borderRadius: "52.5px",
            }}
          />
        </Col>
        <Col xs={6} className="text-center">
          <Icons icon={AI} alt="AI" />
        </Col>
      </Row>
    </>
  );
}
