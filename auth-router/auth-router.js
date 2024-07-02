const express = require('express');
const { Register } = require('../auth-controller.js/auth-controller');

const router = express.Router();

router.route("/api/auth/register").post(Register);

module.exports = router;