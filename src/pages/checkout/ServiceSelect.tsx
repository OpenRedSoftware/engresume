import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setService } from "./formSlice";
import "./ServiceSelect.css";

const ServiceSelect: React.FC = () => {
  const { service } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  // Additional state to handle which row is expanded
  const [expandedService, setExpandedService] = useState("");

  const handleRowClick = (serviceName: string) => {
    if (service !== serviceName) {
      dispatch(setService(serviceName));
      setExpandedService(serviceName); // Expand the clicked row
    }
  };

  return (
    <>
      <Form.Label>Service</Form.Label>
      <Form.Group controlId="serviceSelection">
        <div className="service-select-container">
          <div
            className={`row-select ${service === "basic" ? 'selected-row' : ''} ${expandedService === "basic" ? 'expanded-row' : ''}`}
            onClick={() => handleRowClick("basic")}
          >
            <div className="title-radio-wrapper">
              <div>Basic Review - $19.99</div>
              <Form.Check
                type="radio"
                name="service"
                id="basicReview"
                checked={service === "basic"}
                onChange={() => {}}
              />
            </div>
            {expandedService === "basic" && <div className="service-info">This is the basic description</div>}
          </div>

          <div
            className={`row-select ${service === "full" ? 'selected-row' : ''} ${expandedService === "full" ? 'expanded-row' : ''}`}
            onClick={() => handleRowClick("full")}
          >
            <div className="title-radio-wrapper">
              <div>Full Review - $49.99</div>
              <Form.Check
                type="radio"
                name="service"
                id="fullReview"
                checked={service === "full"}
                onChange={() => {}}
              />
            </div>
            {expandedService === "full" && <div className="service-info">This is the full description</div>}
          </div>
          
          <div
            className={`row-select ${service === "fullRewrite" ? 'selected-row' : ''} ${expandedService === "fullRewrite" ? 'expanded-row' : ''}`}
            onClick={() => handleRowClick("fullRewrite")}
          >
            <div className="title-radio-wrapper">
              <div>Full Review + Resume Rewrite - $349.99</div>
              <Form.Check
                type="radio"
                name="service"
                id="fullReviewRewrite"
                checked={service === "fullRewrite"}
                onChange={() => {}}
              />
            </div>
            {expandedService === "fullRewrite" && <div className="service-info">This is the full rewrite description</div>}
          </div>
        </div>
      </Form.Group>
    </>
  );
};

export default ServiceSelect;
