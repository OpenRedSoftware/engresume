import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/**
 *
 * @returns React form that takes in the Email, Resume, and an optional Notes section.
 * Clicking submit button uploads the email/resume/notes to SubmitResume,
 * and redirects the user to https://buy.stripe.com/test_dR62bE7Py3ks75e7ss
 */
function Checkout() {
  const [paid, setPaid] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [resume, setResume] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [paymentText, setPaymentText] = React.useState("Complete Payment");
  const [paymentId, setPaymentId] = React.useState("");

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
    if (!paid) {
      alert("Please complete payment");
      return;
    }
    if (email === "") {
      alert("Please enter an email");
      return;
    }
    if (resume === "") {
      alert("Please upload a resume");
      return;
    }

    // Get the file
    const file = document.getElementById("formBasicResume") as HTMLInputElement;
    if (!file.files) {
      alert("Please upload a resume");
      return;
    }
    const resumeFile = file.files[0];
    if (!resumeFile) {
      alert("Please upload a resume");
      return;
    }
    console.log(resumeFile);


    // Send a post to http://127.0.0.1:5001/engresume-68715/us-central1/api/upload
    // with the file, email, notes, and paymentId
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("email", email);
    formData.append("notes", notes);
    formData.append("paymentId", paymentId);

    //fetch("http://127.0.0.1:5001/engresume-68715/us-central1/api/upload", {
    fetch("https://us-central1-engresume-68715.cloudfunctions.net/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        alert("Resume uploaded successfully: " + JSON.stringify(res));
      })
      .catch((err) => {
        alert("Error uploading resume: " + err);
      });
  }

  return (
    <div>
      <Form>
        <a
          className={!paid ? "btn btn-primary mb-5" : "btn btn-secondary mb-5"}
          href="https://buy.stripe.com/test_dR62bE7Py3ks75e7ss?client_reference_id=wee"
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

        <Button variant="primary" type="submit" onClick={upload}>
          Submit
        </Button>

        <p className="text-muted mt-3">
          Need help? Contact us at support@engresume.com
        </p>
      </Form>
    </div>
  );
}

export default Checkout;
