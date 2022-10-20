const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const middleware = require('../helper/middleware')

router.get('/get-all', middleware.mustLogin, controller.userGame.getAllUsername);
router.post('/update-username', middleware.mustLogin, controller.userGame.updateUsername);
router.get('/details', middleware.mustLogin, controller.userGame.getThisUserDetails);
router.delete('/delete', middleware.mustLogin, controller.userGame.deleteUser);

module.exports = router;
