import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/**
 * @returns React form that takes in the Email, Resume, and an optional Notes section.
 * Clicking submit button uploads the email/resume/notes to SubmitResume,
 * and redirects the user to https://buy.stripe.com/test_dR62bE7Py3ks75e7ss
 */
function Checkout() {
  const dev = window.location.hostname === "localhost";

  const [paid, setPaid] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [resume, setResume] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [paymentText, setPaymentText] = React.useState("Complete Payment");
  const [paymentId, setPaymentId] = React.useState("");
  const [triedSubmit, setTriedSubmit] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // if URL parameter includes id, then set paid to true
  React.useEffect(() => {
    // Test with http://localhost:3000/checkout?id=cs_test_a1nDx4Wg7oMImVIf20UMtRuXa685nLlk0QOCgflqaOZ2cYNtAjOqh0lz7s
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id) {
      setPaid(true);
      setPaymentText("Payment Complete");
      setPaymentId(id);
    }
  }, []);

  function upload(e: any) {
    e.preventDefault();
    setTriedSubmit(true);
    if (!paid || email === "" || resume === "") {
      return;
    }

    // Get the file
    const file = document.getElementById("formBasicResume") as HTMLInputElement;
    if (!file.files) {
      alert("Your resume failed to upload. Please try again.");
      return;
    }
    const resumeFile = file.files[0];
    if (!resumeFile) {
      alert("Your resume failed to upload. Please try again.");
      return;
    }

    // If the resume is over 5MB, don't upload it
    if (resumeFile.size > 5000000) {
      const resumeMB = Math.round(resumeFile.size / 1000000);
      alert("Your resume is " + resumeMB + "MB. That's rediculous. Please upload a smaller file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("email", email);
    formData.append("notes", notes);
    formData.append("paymentId", paymentId);

    setIsSubmitting(true);

    // fetch("http://127.0.0.1:5001/engresume-68715/us-central1/api/upload", {
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
  }

  return (
    <div>
      <Form>
        <a
          className={!paid ? "btn btn-primary mb-5" : "btn btn-secondary mb-5"}
          href={
            dev
              ? "https://buy.stripe.com/test_dR62bE7Py3ks75e7ss"
              : "https://buy.stripe.com/28og1KgbZ3ZG7aE9AA"
          }
          rel="noreferrer"
        >
          {paymentText}
        </a>

        <br />

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            disabled={!paid}
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
            onChange={(e) => setResume(e.target.value)}
            type="file"
            placeholder="Upload Resume"
            disabled={!paid}
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
            onChange={(e) => setNotes(e.target.value)}
            type="text"
            placeholder="Enter any notes here"
            disabled={!paid}
          />
          <Form.Text className="text-muted">
            Please enter any notes you would like to add.
            <br />
            <br />
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={upload} disabled={isSubmitting}>
          {!isSubmitting ? "Submit" : "Submitting..."}
        </Button>

        <p className="text-muted mt-3">
          Need help? Contact us at support@engresume.com
        </p>
      </Form>
    </div>
  );
}

export default Checkout;
