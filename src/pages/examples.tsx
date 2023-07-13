import React from "react";
import { logevent } from "../firebase/firebaseapp";
import "./index.css";
import SEO from "../components/SEO";
import { Col, Row } from "react-bootstrap";
import GuideCard from "../components/GuideCard";

function Example(props) {
  return (
    <div
      className="jumbotron"
      style={{
        backgroundColor: "#F8F9FA",
      }}
    >
      <Row>
        <Col md={6}>{props.left}</Col>
        <hr className="d-md-none p-2 m-2" />
        <Col md={6}>{props.right}</Col>
      </Row>
    </div>
  );
}

function GetReviewed(props) {
  return (
    <div className="row justify-content-center align-items-center d-flex stretch mt-2 mb-3">
      <GuideCard
        linkdestination="/checkout"
        image="/res/icons/file-pen-solid.svg"
        title="Get Reviewed"
        description={props.description}
      />
    </div>
  );
}

function Examples() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <div className="container">
      <SEO
        title=""
        description=""
        url="https://www.pineappleresume.com/examples"
      />

      <h2 className="text-center p-2">Example Reviews</h2>
      <Row>
        <Col md={6} className="row justify-content-center mt-2 mb-3">
          Original
        </Col>
        <hr className="d-md-none p-2 m-2" />
        <Col md={6} className="row justify-content-center mt-2 mb-3">
          Review
          <span
            className="text-muted"
            style={{ display: "block", textAlign: "center" }}
          >
            Reviewer notes are not included in these examples
          </span>
        </Col>
      </Row>
      <br className="d-md-none m-1" />

      <Example
        left={
          <ul>
            <li>
              Made interactive components for a user interface navigation, menus
              and changing between different types of graphs in JavaScript
            </li>
            <li>[...] </li>
          </ul>
        }
        right={
          <ul>
            <li>
              Developed interactive components & menus to modify graphs for
              [redacted], a 550M product, in React.js
            </li>
            <li>[...] </li>
          </ul>
        }
      />

      <Example
        left={
          <ul>
            <li>[...] </li>
            <li>
              Modified data parsing scripts and modularized data collection in
              Javascript
            </li>
            <li>[...] </li>
          </ul>
        }
        right={
          <ul>
            <li>[...] </li>
            <li>
              Redesigned data pipeline using Firebase and S3, leading to a
              24,000% speed increase and a 98% reduction in data issues
            </li>
            <li>[...] </li>
          </ul>
        }
      />
      <GetReviewed description="Our clients have gotten interviews at top companies like Google, Facebook, Amazon, Microsoft, and more." />

      <Example
        left={
          <ul>
            <li>
              Languages: C, Scala, JavaScript, Python, C++, MySQL, React.js,
              Swift, Node.js, C++, Java,
            </li>
            <li>
              Tools: Git, Atom, Visual Studio Code, IntelliJ IDEA , HTML/CSS,
              Google Cloud Platform, Xcode, AWS Lamda, Microsoft PowerApps,
              Splunk, Excel,
            </li>
            <li>Databases: MongoDB, PostgreSQL, MySQL </li>
          </ul>
        }
        right={
          <>
            <ul>
              <li>Languages: C, Scala, JavaScript, Python, C++, Swift, Java</li>
              <li>Libraries: React.js, Boto3, Splunk, Firebase, Flask</li>
              <li>Tools: Git, Postgres, MongoDB, Xcode, Lambda, PowerApps</li>
            </ul>
          </>
        }
      />

      <Example
        left={
          <ul>
            <li>
              Developed a full-stack web app with an AI quiz generator that
              takes in user-inputted text and turns it into interactive
              quizzes/trivia for studying purposes.
            </li>
            <li>
              Allows users to create accounts and load/store their favorite
              quizzes from a database so they can practice.
            </li>
            <li>
              Technologies used: React, JavaScript, Material UI, Node.js, OpenAI
              API, Firebase Authentication, FireStore.
            </li>
          </ul>
        }
        right={
          <ul>
            <li>
              Developed full stack AI based quiz generator with OpenAI, React
              and Material UI
            </li>
            <li>
              Implemented Firebase OAuth and stored user quizzes in Firestore
              database
            </li>
            <li>Generated 1,000+ quizzes in the first 4 weeks of launch</li>
          </ul>
        }
      />
      <Example
        left={
          <ul>
            <li>
              Leading a team of amazing developers at PayPay and delivering
              quality features.
            </li>
            <li>
              Designed and Lead the payment-side implementation for the “Payment
              Method Priority” feature on the PayPay app allowing the users to
              pay without having sufficient balance in the selected payment
              method.
            </li>
            <li>
              Released in July’22, this feature transfers an average GMV of 6-8
              Billion ¥/ 60-80 Million $ per year that would have otherwise
              failed due to insufficient balance.
            </li>
          </ul>
        }
        right={
          <ul>
            <li>
              Lead a team of 5 developers to design and implement "Payment
              Method Priority", a PayPal app feature that allows a fallback
              payment method
            </li>
            <li>
              Released in July’22, this feature transferred an average GMV of
              6-8 Billion ¥/ 60-80 Million $ per year that would have otherwise
              failed due to insufficient balance
            </li>
          </ul>
        }
      />
      <Example
        left={
          <ul>
            <li>
              ’Best Design’ winner out of 12 teams for developing a productivity
              web app mockup.
            </li>
            <li>
              Helps friends keep each other accountable in accomplishing goals
              through public to-do lists and a punishment/reward system of
              virtual tomato-throwing. Used JavaScript, Bootstrap, CSS, HTML
            </li>
          </ul>
        }
        right={
          <ul>
            <li>
              Designed public to-do list where users can throw virtual tomatoes
              at friends who don't complete their tasks
            </li>
            <li>
              Used JavaScript, Bootstrap CSS & Firebase Realtime Database for
              hackathon mockup, winning "Best Design" out of 12 teams
            </li>
          </ul>
        }
      />
      <Example
        left={
          <ul>
            <li>
              Simplified client (amazon subsidiaries) on-boarding on risk
              evaluation platform for monitoring transactions. Validated client
              configuration containing metadata information and ML models
              required to classify the transaction as Pass/Queue/Cancel
            </li>
          </ul>
        }
        right={
          <ul>
            <li>
              Simplified ML based transaction risk evaluator for an Amazon
              subsidiary using Java, Spring, and AWS EC2, resulting in 50% more
              code coverage and 20x faster response time
            </li>
          </ul>
        }
      />
      <GetReviewed
        description={`Fact: The higher you go, the more power you have over work-life balance, impact, salary, and more.`}
      />
    </div>
  );
}

export default Examples;
