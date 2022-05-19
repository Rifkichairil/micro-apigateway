const express = require('express');
const router = express.Router();
const mentorHandlers = require('./handler/mentors')

router.get('/', mentorHandlers.getAll)
router.get('/:id', mentorHandlers.detail)
router.post('/', mentorHandlers.create)
router.put('/:id', mentorHandlers.update)
router.delete('/:id', mentorHandlers.destroy)

module.exports = router;
