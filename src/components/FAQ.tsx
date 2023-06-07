
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
                    The price is a deterrent to avoid too many submissions. This
                    service was originally free and provided on various social
                    platforms including Reddit, Lemmy, and Blind, but quickly
                    grew too large.
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                What does the service offer?
                <ul>
                  <li>
                    The service has two core parts:
                    <ol>
                      <li>
                        Resume content feedback (format, skills, education,
                        anything else)
                      </li>
                      <li>
                        Experience (+ Projects) bullet points Direct feedback on
                        BS detection and improvement areas Example bullet points
                        rewriting Most users require help in both areas.
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                What sort of resumes are accepted?
                <ul>
                  <li>
                    Only Software Engineering resumes are accepted at this time.
                    Devops & Web Dev focused resumes are accepted too, but not
                    the subject matter expertise.
                  </li>
                </ul>
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
