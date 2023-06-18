import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Refund = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 1 }}></Col>
          <Col md={{ span: 10 }}>
            <h3>Refund Policy</h3>
            <ul>
              <li>
                Refund Policy:
                <ul>
                  <li>
                    Full refunds are available if you’re not satisfied with the
                    review. To request a refund, contact the email that sent you
                    the review.
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col md={{ span: 1 }}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Refund;
