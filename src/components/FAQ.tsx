import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 1 }}></Col>
          <Col md={{ span: 10 }}>
            <h2>FAQ</h2>
            <ul>
              <li className="pb-2">
                Why is it so expensive?
                <ul>
                  <li>
                    The price is to avoid too many submissions. This service was
                    originally free, but was flooded with submissions.
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                <div className="pb-2">What does this service offer?</div>
                The resume review gives actionable feedback that can mostly be
                inserted directly into your resume to make it better. This
                includes:
                <ul className="pb-2">
                  <li>Bulletpoint guidance</li>
                  <li>Format/Content improvements</li>
                  <li>Impact & anti-dilution</li>
                </ul>
                This service is for Software Engineering resumes. Devops & Web
                Dev resumes can be submitted as well, but are not the main focus
                of this service.
              </li>
              <li className="pb-2">
                Any example reviews?
                <ul>
                  <li>
                    Yes, see here:{" "}
                    <a href="https://www.levels.fyi/community/thread/GXiJUI/free-resume-review">
                      https://www.levels.fyi/community/thread/GXiJUI/free-resume-review
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                Are you a recruiter for FAANG?
                <ul>
                  <li>No.</li>
                </ul>
              </li>
            </ul>
            <h3>Refund Policy</h3>
            <ul>
              <li>
                Refund Policy:
                <ul>
                  <li>
                    Full refunds are available if you’re not satisfied with the
                    service (note you will be barred from using the service
                    again in the future)
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

export default FAQ;
