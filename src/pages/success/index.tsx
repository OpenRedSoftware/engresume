import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { logevent } from "../../firebase/firebaseapp";
import SEO from "../../components/SEO";

function Splash() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <main>
      <SEO
        title="PineappleResume | Success"
        description="PineappleResume.com - Purchase successful! Your resume feedback will be delivered soon."
        url="https://www.pineappleresume.com/success"
      />
      <div>
        <div
          className="jumbotron"
        >
          <Container>
            <Row>
              <Col md={{ span: 1 }}></Col>
              <Col md={{ span: 10 }}>
                <strong>
                  <h1 className="d-flex justify-content-center">
                    Woohoo! Resume submitted!
                  </h1>
                </strong>

                <p className="d-flex justify-content-center m-2">
                  Your resume will be reviewed within 48 hours. You will receive
                  an email with detailed feedback when it's ready.
                </p>

                <div className="text-muted d-flex justify-content-center pb-2">
                  In a rush? Contact support for expedited service.
                </div>
              </Col>
              <Col md={{ span: 1 }}></Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="text-muted d-flex justify-content-center pb-2">
        Contact: support@engresume.com
      </div>
    </main>
  );
}

export default Splash;
