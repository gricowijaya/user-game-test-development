const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const middleware = require('../helper/middleware')

router.get('/get-history', middleware.mustLogin, controller.userGameHistory.getHistory);
router.post('/create', middleware.mustLogin, controller.userGameHistory.create);

module.exports = router;
