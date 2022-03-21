const express = require("express");
const router = express.Router();

const {
  homePage,
  recipePage,
  aboutPage,
  sendMail,
} = require("../controllers/mainContoller");
router.route("/").get(homePage).post(sendMail);
router.route("/recipes").get(recipePage);
router.route("/aboutme").get(aboutPage);

module.exports = router;
