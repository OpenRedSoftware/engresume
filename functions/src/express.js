import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import nodemailer from "nodemailer";
import busboy from "busboy";

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
app.post("/upload", async (req, res) => {
  const fields = {};
  let resume = null;
  const bb = busboy({headers: req.headers});
  bb.on("field", (name, val, info) => {
    console.log(`Field [${name}]: value: %j`, val);
    fields[name] = val;
  });
  bb.on("file", (name, file, info) => {
    const {filename, encoding, mimeType} = info;
    console.log(
        `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
        filename,
        encoding,
        mimeType
    );
    file.on("data", (data) => {
      console.log(`File [${name}] got ${data.length} bytes`);
      resume = data;
    }).on("close", () => {
      console.log(`File [${name}] done`);
    });
  });
  bb.on("close", () => {
    console.log("Done parsing form!");

    const email = fields.email;
    const notes = fields.notes;
    const paymentId = fields.paymentId;

    functions.logger.log(`Got a resume from ${email} with notes ${notes} and payment ID ${paymentId}.`);
    functions.logger.log(`Resume size is ${resume?.length} bytes.`);

    if (!resume || !email || !paymentId) {
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
  bb.end(req.rawBody);
});

// Can be hit with all (GET/POST/etc) from https://us-central1-merge-clash.cloudfunctions.net/api TODO THAT"S NOT IT
// Goes here if nothing above is hit and returns 400
app.all("*", function(req, res) {
  logHitDetails(req);
  res.status(400).send();
});

export const api = functions.https.onRequest(app);
