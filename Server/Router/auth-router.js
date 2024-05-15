


const express = require("express");
const router = express.Router();
const { home, register,about, login } = require("../Controllers/auth-controller");


router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/about").get(about);
module.exports = router;
