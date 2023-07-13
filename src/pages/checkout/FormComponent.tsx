import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setShowMustpay, setEmail, setResume, setNotes } from "./formSlice";

const FormComponent: React.FC = () => {
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { email, resume, notes, paid, paymentId, showMustpay } = useSelector(
    (state: RootState) => state.form
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTriedSubmit(true);

    if (email === "" || resume === "") {
      return;
    }

    if (!paid) {
      dispatch(setShowMustpay(true));
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
    formData.append("paymentId", paymentId);

    setIsSubmitting(true);

    fetch("https://us-central1-engresume-68715.cloudfunctions.net/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        // Redirect the user to /success page
        window.location.href = "/success";
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
      <Form.Group controlId="formBasicEmail">
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
          <br />
          <br />
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicResume">
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
          <br />
          <br />
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicNotes">
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
          <br />
          <br />
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        {!isSubmitting ? "Submit" : "Submitting..."}
      </Button>

      {showMustpay && (
        <div className="alert alert-danger mt-3">
          Please complete payment before submitting.
        </div>
      )}
    </Form>
  );
};

export default FormComponent;
