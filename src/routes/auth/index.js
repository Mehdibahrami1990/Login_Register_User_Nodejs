const express = require("express");
const router = express.Router();
const validator = require("./validator");
const controller = require("./controller");
const asyncHandler = require("express-async-handler");
// router.post("/register", controller.register.bind(controller));//with auto bind
router.post(
  "/register",
  validator.registerValidator(),
  controller.validate,
  asyncHandler(controller.register)
);

router.post(
  "/login",
  validator.loginValidator(),
  controller.validate,
  asyncHandler(controller.login)
);

module.exports = router;
