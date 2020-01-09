var express = require('express');
var router = express.Router();
var controller = require('../controller/greetingController');

router.get('/welcomeMessage', controller.welcomeMessage);
router.post('/welcomeMessage', controller.welcomeMessage);
router.put('/welcomeMessage', controller.welcomeMessage);
router.delete('/welcomeMessage', controller.welcomeMessage);

router.get('/helloWorld', controller.helloWorldController);


module.exports = router;
