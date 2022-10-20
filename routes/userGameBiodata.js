const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const middleware = require('../helper/middleware')

router.post('/create', middleware.mustLogin, controller.userGameBiodata.createBiodata);
router.get('/get-details', middleware.mustLogin, controller.userGameBiodata.getBiodataDetails);
router.put('/update', middleware.mustLogin, controller.userGameBiodata.updateBiodata);
router.delete('/delete', middleware.mustLogin, controller.userGameBiodata.deleteBiodata);

module.exports = router;
