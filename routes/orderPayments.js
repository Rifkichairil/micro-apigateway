const express = require('express');
const router = express.Router();
const orderPaymentsHandlers = require('./handler/order-payment')

router.get('/', orderPaymentsHandlers.get)

module.exports = router;
