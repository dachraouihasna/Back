const express = require("express");
const { login, register } = require("../controllers/authController");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

router.post("/login", login);

router.post("/register", register);

module.exports = router;
