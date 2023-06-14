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
                Why is it so expensive?
                <ul>
                  <li>
                    The price is a balance between having too many submissions
                    and paying reviewers fairly. Also, consider:
                    <ul>
                      <li>
                        Similar profit-driven services charge up to 350$ for a
                        similar result (we can also vouch for the quality of
                        these services)
                      </li>
                      <li>
                        The 75th percentile Software Engineer salaries in the
                        Bay Area is ~230k TC. If you're below that, you have a
                        lot to gain.
                      </li>
                      <li>
                        Time is money. Doubling your callback rate saves a lot
                        of time.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pb-2">
                Any example reviews?
                <ul>
                  <li>
                    See here:{" "}
                    { /* Show this version if the layout is sm or larger */ }
                    <a href="https://www.levels.fyi/community/thread/GXiJUI/free-resume-review" className="d-none d-sm-block">
                      https://levels.fyi/community/thread/GXiJUI/free-resume-review
                    </a>
                    { /* Show this version if the layout is xs or smaller */ }
                    <a href="https://www.levels.fyi/community/thread/GXiJUI/free-resume-review" className="d-block d-sm-none">
                      Levels.fyi Thread
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
