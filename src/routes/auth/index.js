const express = require("express");
const router = express.Router();
const validator = require("./validator");
const controller = require("./controller");

// router.post("/register", controller.register.bind(controller));//with auto bind
router.post(
  "/register",
  validator.registerValidator(),
  controller.validate,
  controller.register
);

router.post(
  "/login",
  validator.loginValidator(),
  controller.validate,
  controller.login
);

module.exports = router;
