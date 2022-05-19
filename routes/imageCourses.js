const express = require('express');
const router = express.Router();
const imageHandler = require('./handler/image_course')

router.post('/', imageHandler.create)

module.exports = router;
