import { Col, Container, Row } from "react-bootstrap";

export default function AdminPage() {
  return (
    <div className="text-center">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form2Example1">
                  Username
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block mb-4 col-6"
              >
                Sign in
              </button>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
