const express = require("express");
const router = express.Router();
const controller = require("./controller");
const asyncHandler = require("express-async-handler");

// router.post("/register", controller.register.bind(controller));//with auto bind
router.get("/", asyncHandler(controller.dashboard));

router.get("/aboutme", asyncHandler(controller.aboutme));

module.exports = router;
