import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ServiceSelect from "./ServiceSelect";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setEmail, setResume, setNotes, setTriedSubmit } from "./formSlice";

const FormComponent: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { email, resume, notes, service, triedSubmit } = useSelector(
    (state: RootState) => state.form
  );

  // todo - different stripe links for different services
  const stripeLink =
    window.location.hostname === "localhost"
      ? "https://buy.stripe.com/test_dR62bE7Py3ks75e7ss"
      : "https://buy.stripe.com/28og1KgbZ3ZG7aE9AA";

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setTriedSubmit(true));

    if (email === "" || resume === "" || service === "") {
      return;
    }

    const fileInput = document.getElementById(
      "formBasicResume"
    ) as HTMLInputElement;
    if (!fileInput.files) {
      alert("Your resume failed to upload. Please try again.");
      return;
    }
    const resumeFile = fileInput.files[0];
    if (!resumeFile) {
      alert("Your resume failed to upload. Please try again.");
      return;
    }

    if (resumeFile.size > 5000000) {
      const resumeMB = Math.round(resumeFile.size / 1000000);
      alert(
        "Your resume is " +
          resumeMB +
          "MB. That's ridiculous. Please upload a smaller file."
      );
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("email", email);
    formData.append("notes", notes);
    formData.append("service", service);

    setIsSubmitting(true);

    fetch("https://us-central1-engresume-68715.cloudfunctions.net/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        window.location.href = stripeLink;
      })
      .catch((err) => {
        alert(
          "Error uploading resume. Try again later, or contact support.\n" + err
        );
        setIsSubmitting(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => {
            dispatch(setEmail(e.target.value));
            localStorage.setItem("email", e.target.value);
          }}
          type="email"
          placeholder="Enter email"
          isInvalid={email === "" && triedSubmit}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicResume" className="mb-3">
        <Form.Label>Resume</Form.Label>
        <Form.Control
          value={resume}
          onChange={(e) => {
            dispatch(setResume(e.target.value));
          }}
          type="file"
          placeholder="Upload Resume"
          isInvalid={resume === "" && triedSubmit}
        />
        <Form.Text className="text-muted">
          Please upload your resume as a PDF.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicNotes" className="mb-3">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          value={notes}
          onChange={(e) => {
            dispatch(setNotes(e.target.value));
            localStorage.setItem("notes", e.target.value);
          }}
          type="text"
          placeholder="Enter any notes here"
        />
        <Form.Text className="text-muted">
          Please enter any notes you would like to add.
        </Form.Text>
      </Form.Group>

      <div className="mb-3">
        <ServiceSelect />
      </div>

      <div className="mb-3">
      </div>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Continue to Checkout
      </Button>
    </Form>
  );
};

export default FormComponent;
