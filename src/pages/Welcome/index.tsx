import { Col, Row } from "react-bootstrap";
import MicIcon from "../../assets/icons/mic-icon.svg";
import SpaceIcon from "../../assets/icons/space-icon";
import Icons from "../../components/Icons";

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
    </>
  );
}
