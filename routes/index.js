const express = require('express');
const router = express.Router();
const auth = require('./auth');
const userGame = require('./userGame');
const userGameBiodata = require('./userGameBiodata');
const userGameHistory = require('./userGameHistory');

router.use('/auth', auth);
router.use('/user-game', userGame);
router.use('/user-game-biodata', userGameBiodata);
router.use('/user-game-history', userGameHistory);

module.exports = router;
