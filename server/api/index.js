const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const auth_testApi = require('./auth_test')

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(auth_testApi)
module.exports = router;