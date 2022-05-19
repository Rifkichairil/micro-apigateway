const express = require('express');
const router = express.Router();
const webhookHandlers = require('./handler/webhook')

router.post('/', webhookHandlers.webhooks)

module.exports = router;
