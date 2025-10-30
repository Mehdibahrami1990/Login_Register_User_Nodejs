const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const adminRouter = require("./admin");
const { isLoggedin, isAdmin } = require("../middlewares/auth");
const error = require('../middlewares/error')

router.use("/auth", authRouter);
router.use("/user", isLoggedin, userRouter);

router.use("/admin", isLoggedin, isAdmin, adminRouter);
//Error Midleware
// router.use(error);

module.exports = router;
