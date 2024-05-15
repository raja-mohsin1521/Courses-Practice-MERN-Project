


const express = require("express");
const router = express.Router();
const mainRoutes = require("../Controllers/auth-controller");


router.route("/").get(mainRoutes.home);
router.route("/register").post(mainRoutes.register);
router.route("/login").post(mainRoutes.login);
router.route("/about").get(mainRoutes.about);
module.exports = router;
