const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");

router.post("/login", authController.login);

router.post("/signup", authController.signUp);

router.post("/forgot-password", authController.forgotPassword);

router.post("/reset-password", authController.resetPassword);

module.exports = router;
