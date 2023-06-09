import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import FAQ from "../../components/FAQ";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";

function Splash() {
  React.useEffect(() => {
    logevent("view", {name: window.location.pathname});
  }, []);

  return (
    <main>
      <div>
        <div className="d-flex justify-content-center p-2 pb-3">
          <h2>Professional Software Engineering Resume Reviews.</h2>
        </div>
        <div
          className="jumbotron"
          style={{
            backgroundColor: "#F8F9FA",
          }}
        >
          <Container>
            <Row>
              <Col md={{ span: 1 }}></Col>
              <Col md={{ span: 10 }}>
                <strong>
                  <h1
                    className="d-flex justify-content-center"
                    style={{ fontSize: "5rem" }}
                  >
                    50$
                  </h1>
                </strong>
                <div className="text-muted d-flex justify-content-center pb-2">
                  No Nonsense. No Hidden Fees.
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="/checkout">
                    <Button size="lg" className="mr-3 px-5">
                      Get started
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col md={{ span: 1 }}></Col>
            </Row>
          </Container>
        </div>
      </div>

      <FAQ />
    </main>
  );
}

export default Splash;
