const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/* GET home page. */
router.get("/", (req, res, next) => {
  return res.json({ message: "hello mailer" });
});

router.post("/send", (req, res, next) => {
  console.log(req.body);
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "zizoahmed980@gmail.com",
      pass: "011421264482014zizo"
    }
  });

  if(validateEmail(req.body)){
    
  }else{
    return res.json({code: 400,message: 'EMAIL_DATA_NOT_VALID'});
  }

  // let mailOptions = {
  //   // should be replaced with real recipient's account
  //   to: "info@gmail.com",
  //   subject: req.body.subject,
  //   body: req.body.message
  // };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log("Message %s sent: %s", info.messageId, info.response);
  // });
  // res.writeHead(301, { Location: "index.html" });
  // res.end();
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
      subject !== null && subject !== undefined &&
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
