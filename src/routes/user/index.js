const express = require("express");
const router = express.Router();
const controller = require("./controller");

// router.post("/register", controller.register.bind(controller));//with auto bind
router.get("/", controller.dashboard);

router.get("/aboutme", controller.aboutme);

module.exports = router;
