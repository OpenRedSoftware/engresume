import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import nodemailer from "nodemailer";
import multiparty from "multiparty";

const app = express();

app.use(cors({origin: "*", optionsSuccessStatus: 200, methods: ["GET", "POST"], allowedHeaders: ["Content-Type", "Origin", "X-Requested-With", "Accept"], credentials: true}));

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
app.post("/upload", async (req, res) => {
  logHitDetails(req);
  // Get the file, email, notes, and payment ID from the FormData in the body of the request using multiparty
  const form = new multiparty.Form();

  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve([fields, files]);
      }
    });
  });

  const resume = files?.resume?.[0]?.path;
  const email = fields?.email?.[0];
  const notes = fields?.notes?.[0];
  const paymentId = fields?.paymentId?.[0];

  functions.logger.log(`Got a resume from ${email} with notes ${notes} and payment ID ${paymentId}.`);
  functions.logger.log(`Resume size is ${resume?.length} bytes.`);

  if (!resume || !email || !notes || !paymentId) {
    res.status(400).send();
    return;
  }

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
