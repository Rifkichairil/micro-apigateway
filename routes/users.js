const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env
const usersHandlers = require('./handler/users')

const verifyToken = require('../middlewares/verifiedToken')


router.post('/register', usersHandlers.register)
router.post('/login', usersHandlers.login)
router.put('/',verifyToken, usersHandlers.update)
router.get('/',verifyToken, usersHandlers.getUser)
router.post('/logout',verifyToken, usersHandlers.logout)

module.exports = router;
