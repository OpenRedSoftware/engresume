import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import nodemailer from "nodemailer";

const app = express();

app.use(cors({origin: true}));

const logHitDetails = (req) => {
  const origUrl = req.originalUrl;
  const payload = JSON.stringify(req.body);
  const type = req.method;
  const ip = req.ip;

  const msg = `${origUrl} got a ${type} ${payload} from ${ip}`;

  functions.logger.log(msg);
};

const user = "engresumesender@gmail.com";
const password = "cbserkuglohlrbjo";

// http://127.0.0.1:5001/engresume-68715/us-central1/api/upload
app.post("/upload", (req, res) => {
  logHitDetails(req);
  const email = req.body.email;
  const resume = req.body.resume;
  const notes = req.body.notes;
  const paymentId = req.body.paymentId;

  // Send an email to matt@engresume.com with the resume
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: password,
    },
  });

  const mailOptions = {
    from: user,
    to: "matt@engresume.com",
    subject: "New Resume",
    text: `Email: ${email}\nNotes: ${notes}\nPayment ID: ${paymentId}`,
    attachments: [
      {
        filename: "resume.pdf",
        content: resume,
      },
    ],
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      functions.logger.log("!!!! ERROR SENDING EMAIL !!!!");
      functions.logger.log(error);
      res.status(500).send();
    } else {
      functions.logger.log("Email sent: " + info.response);
      res.status(200).send();
    }
  });
});

// Can be hit with all (GET/POST/etc) from https://us-central1-merge-clash.cloudfunctions.net/api TODO THAT"S NOT IT
// Goes here if nothing above is hit and returns 400
app.all("*", function(req, res) {
  logHitDetails(req);
  res.status(400).send();
});

export const api = functions.https.onRequest(app);
