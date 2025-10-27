const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const { isLoggedin } = require("../middlewares/auth");

router.use("/auth", authRouter);
router.use("/user", isLoggedin, userRouter);

module.exports = router;
