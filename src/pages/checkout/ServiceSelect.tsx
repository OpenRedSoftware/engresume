import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setService } from "./formSlice";
import "./ServiceSelect.css";

const ServiceSelect: React.FC = () => {
  const { service } = useSelector(
    (state: RootState) => state.form
  );

  const dispatch = useDispatch();

  return (
    <>
      <Form.Label>Service</Form.Label>
      <Form.Group controlId="serviceSelection">
        <div className="service-select-container">
          <div
            className={`row-select ${service === "basic" ? 'selected-row' : ''}`}
            onClick={() => dispatch(setService("basic"))}
          >
              <div>Basic Review - $19.99</div>
              <Form.Check
                type="radio"
                name="service"
                id="basicReview"
                checked={service === "basic"}
                onChange={() => {}}
              />
          </div>

          <div
            className={`row-select ${service === "full" ? 'selected-row' : ''}`}
            onClick={() => dispatch(setService("full"))}
          >
              <div>Full Review - $49.99</div>
              <Form.Check
                type="radio"
                name="service"
                id="fullReview"
                checked={service === "full"}
                onChange={() => {}}
              />
          </div>
          
          <div
            className={`row-select ${service === "fullRewrite" ? 'selected-row' : ''}`}
            onClick={() => dispatch(setService("fullRewrite"))}
          >
              <div>Full Review + Resume Rewrite - $349.99</div>
              <Form.Check
                type="radio"
                name="service"
                id="fullReviewRewrite"
                checked={service === "fullRewrite"}
                onChange={() => {}}
              />
          </div>
        </div>
      </Form.Group>
    </>
  );
};

export default ServiceSelect;
