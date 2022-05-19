const express = require('express');
const router = express.Router();
const chaptersHandlers = require('./handler/chapter')

router.get('/', chaptersHandlers.getAll)
router.get('/:id', chaptersHandlers.detail)
router.post('/', chaptersHandlers.create)
router.put('/:id', chaptersHandlers.update)
router.delete('/:id', chaptersHandlers.destroy)

module.exports = router;
