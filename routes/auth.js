const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const middleware = require('../helper/middleware')

router.post('/register', controller.auth.register);
router.post('/login', controller.auth.login);
router.get('/whoami', middleware.mustLogin, controller.auth.whoami);
router.put('/change-password', middleware.mustLogin, controller.auth.changePassword);

module.exports = router;
