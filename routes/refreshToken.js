const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env
const refreshTokenHandlers = require('./handler/refresh_token')

router.post('/', refreshTokenHandlers.refreshToken)

module.exports = router;
