const express = require("express");
const router = express.Router();
const nodeMailer = require('nodemailer');

/* GET home page. */
router.get("/", (req, res, next) => {
  return res.json({message: "hello mailer"});
});



router.post('/send', (req, res, next)=> {

});
module.exports = router;
