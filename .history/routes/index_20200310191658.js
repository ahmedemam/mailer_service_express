const express = require("express");
const router = express.Router();
const nodeMailer = require('nodemailer');

/* GET home page. */
router.get("/", (req, res, next) => {
  return res.json({message: "hello mailer"});
});



router.post('/send', (req, res, next)=> {
  console.log(req.body);
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'zizoahmed980@gmail.com',
      pass: '011421264482014zizo'
    }
  });
});
module.exports = router;
