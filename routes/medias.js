const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env
const mediaHandlers = require('./handler/media')

router.get('/', mediaHandlers.getAll)
router.post('/', mediaHandlers.create)
router.delete('/:id', mediaHandlers.destroy)

module.exports = router;
