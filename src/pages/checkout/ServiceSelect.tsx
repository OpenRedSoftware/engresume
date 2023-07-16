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

  const serviceDetails = {
    "basic": (
      <ul>
        <li>Feedback on all content, including skills, education, work experience, and projects</li>
        <li>Feedback on formatting</li>
        <li>Suggestions to improve bullet points</li>
      </ul>
    ),
    "full": (
      <ul>
        <li>Feedback on all content, including skills, education, work experience, and projects</li>
        <li>Feedback on formatting</li>
        <li>Rewritten bullet points & bulletpoint feedback</li>
      </ul>
    ),
    "fullRewrite": (
      <ul>
        <li>New resume from a professional template</li>
        <li>Built from any submitted content, including Linkedin, Github and projects</li>
        <li>Back and forth discussion until you're satisfied</li>
        <li>Instructions on how to maintain the resume quality going forwards</li>
      </ul>
    )
  }

  const getCanonicalService = (service: string) => {
    if (service === "fullRewrite") {
      return "Full Rewrite";
    } else {
      return service.charAt(0).toUpperCase() + service.slice(1) + " Review";
    }
  }

  return (
    <>
      <Form.Label>Service</Form.Label>
      <Form.Group controlId="serviceSelection">
        <div className={`service-select-container ${service ? '' : 'is-invalid'}`}>
          {["basic", "full", "fullRewrite"].map((type) => (
            <div
              key={type}
              className={`row-select ${service === type ? 'selected-row' : ''}`}
              onClick={() => { if (service !== type) dispatch(setService(type)) }}
            >
              <div>{getCanonicalService(type)} - {type === "basic" ? '$19.99' : type === "full" ? '$49.99' : '$349.99'}</div>
              <Form.Check
                type="radio"
                name="service"
                id={`${type}Review`}
                checked={service === type}
                onChange={() => {}}
              />
              {service === type && <div className="service-details">{serviceDetails[type]}</div>}
            </div>
          ))}
        </div>
      </Form.Group>
    </>
  );
};

export default ServiceSelect;
