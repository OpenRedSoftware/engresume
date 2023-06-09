import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function WrapWithContent(jsxElement) {
  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column justify-content-between">
        <Container>
          <Row>
            <Col>
              {jsxElement.jsxElement}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
