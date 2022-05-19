const express = require('express');
const router = express.Router();
const coursesHandlers = require('./handler/courses')
const verifyToken = require('../middlewares/verifiedToken')
const can = require('../middlewares/permissions')


router.get('/', coursesHandlers.getAll)
router.get('/:id', coursesHandlers.detail)
router.post('/', verifyToken, can('admin'), coursesHandlers.create)
router.put('/:id', verifyToken, can('admin'), coursesHandlers.update)
router.delete('/:id',verifyToken, can('admin'), coursesHandlers.destroy)

module.exports = router;
