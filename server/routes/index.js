const { Router } = require("express");
const sendMail = require("../controllers/mails/sendMail");

const router = Router();

router.post('/sendMail', sendMail)

module.exports = router