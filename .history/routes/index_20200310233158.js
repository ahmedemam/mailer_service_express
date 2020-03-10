const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/* GET home page. */
router.get("/", (req, res, next) => {
  return res.json({ message: "hello mailer" });
});

router.post("/send", (req, res, next) => {
  const email = req.body;
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    service: "Gmail",
    requireTLS: true,
    auth: {
      user: "zizoahmed980@gmail.com",  // email
      pass: "011421264482014zizo"     // password
    }
  });

  if (validateEmail(email)) {
    const { from, to, htmlContent, subject } = email;
    console.log(to)
    for (let one of to) {
      if (EMAIL_REGEX.test(one)) {
        const emailOptions = {
          from: from,
          to: one,
          subject: subject,
          html: htmlContent
        };
        transporter.sendMail(emailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            return res.json({ error: error });
          }
          console.log("Message %s sent: %s", info.messageId, info.response);
        });
      }
      return res.json({ code: 200, message: "EMAILS_SENT_SUCCESSFULLY" });
    }
  } else {
    return res.json({ code: 400, message: "EMAIL_DATA_NOT_VALID" });
  }
});

function validateEmailFormat(email) {
  return EMAIL_REGEX.test(email);
}

function validateEmail(emailDetails) {
  const sender = emailDetails.from;
  const receivers = emailDetails.to;
  const emailBodyHtml = emailDetails.htmlContent;
  const subject = emailDetails.subject;
  // emails and not empty
  if (sender && validateEmailFormat(sender) && !receivers.includes(sender)) {
    if (
      receivers.length > 0 &&
      subject !== null &&
      subject !== undefined &&
      (emailBodyHtml !== null || emailBodyHtml !== undefined)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = router;
