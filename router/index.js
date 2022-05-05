const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')


router.get('/',mainController.homePage);
router.post('/sent',mainController.sendEmail);
router.get('/birthday',mainController.birthday);
router.get('/naissance',mainController.naissance);
router.get('/saint-valentin',mainController.saintValentin);
router.get('/mariage',mainController.mariage);

module.exports=router