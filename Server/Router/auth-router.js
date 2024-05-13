


const express = require("express");
const router = express.Router();
const { home, register,about } = require("../Controllers/auth-controller");


router.route("/").get(home);
router.route("/register").post(register);
router.route("/about").get(about);
module.exports = router;
