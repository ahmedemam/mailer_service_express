const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");

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
  res.status(200);
});
module.exports = router;
