const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  return res.json({message: "hello mailer"});
});

router.post('/send', )
module.exports = router;
