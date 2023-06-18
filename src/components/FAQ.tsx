import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 1 }}></Col>
          <Col md={{ span: 10 }}>
            <h2>About</h2>
            <ul>
              <li className="pb-2">
                <div className="pb-2">What does this service offer?</div>
                <div className="pb-2">
                  Actionable feedback and improvements that can be inserted into
                  your resume for better results. This includes:
                </div>
                <ul className="pb-2">
                  <li>Bulletpoint improvements & suggestions</li>
                  <li>Format/Content improvements</li>
                  <li>Impact & anti-dilution modifications</li>
                </ul>
                If you're not targetting Software Engineering, include your role
                (and optionally JD) during submission so we can tailor towards
                that.
              </li>
              <li className="pb-2">
                Who is this service run by?
                <ul>
                  <li>
                    This service is run by recruiters and hiring managers from
                    startups to MANGA+ companies.
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                Do you do referrals?
                <ul>
                  <li>No.</li>
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

export default FAQ;
