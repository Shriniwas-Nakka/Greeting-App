var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');

router.get('/welcomeMessage', controller.welcomeMessage);
router.post('/welcomeMessage', controller.welcomeMessage);
router.put('/welcomeMessage', controller.welcomeMessage);
router.delete('/welcomeMessage', controller.welcomeMessage);

router.get('/helloWorld', controller.helloWorldController);

router.post('/greetingMessage/:firstName/:lastName', controller.createController);
router.get('/getGreeting/:id', controller.readController);
router.get('/getGreetings', controller.getAllGreetingsController);
router.put('/editGreetings/:id', controller.editGreetingsController);
router.delete('/deleteGreeting/:id', controller.deteleGreetingsController);


module.exports = router;
