import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 My Epicode, solo libri di qualità</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
