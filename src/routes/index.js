const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const adminRouter = require("./admin");
const { isLoggedin, isAdmin } = require("../middlewares/auth");

router.use("/auth", authRouter);
router.use("/user", isLoggedin, userRouter);

router.use("/admin", isLoggedin, isAdmin, adminRouter);
module.exports = router;
