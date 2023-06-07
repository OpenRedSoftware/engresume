import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";

function imageBanner(url) {
  return (
    <Image
      className="d-block pb-3 pl-1 pr-1"
      style={{
        width: "150px",
        height: "100px",
      }}
      src={url}
      alt="Banner images"
      rounded
    />
  );
}

function Splash() {
  return (
    <main>
      <div>
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
                  <strong><h1 className="d-flex justify-content-center" style={{fontSize: "5rem"}}>
                    50$
                  </h1></strong>
                  <div className="text-muted d-flex justify-content-center pb-2">No Nonsense. No Hidden Fees.</div>
                  <div className="d-flex justify-content-center">
                    <Link to="/lessons">
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

      <Container>
        <Row>
          <Col sm>
            <h2>Content you love</h2>
            <p>
              We all know learning a language is hard. Sometimes you just need a
              little payoff for your learning - that's where we come in.
            </p>
            <p>
              If you listen to music in your new language, this is the solution
              for you. Easier and more meaningful lessons based on your favorite
              songs.
            </p>
          </Col>

          <Col sm>
            <h2>Spaced Repetition</h2>
            <p>
              OurKorean uses a research-backed spaced repeititon learning
              algorithm - meaning you get the most from your effort.
            </p>
            <p>
              Both spaced repetition and memorable sentences are the best ways
              to learn new vocab - which is why learning through Music so
              powerful.
            </p>
            <p />
          </Col>

          <Col sm>
            <h2>Community Driven</h2>

            <p>
              The content & lessons are created by the community. Want to add a
              new song? Sign up and head to the{" "}
              <Link to="/createlesson">Create Lesson</Link> page.
            </p>
            <p>
              I've created OurKorean simply because there was nothing like it
              out there - and it'll stay fresh so long as I listen to you.
              Discord, Reddit, or anywhere else - I'll be reading every
              suggestion.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Splash;
