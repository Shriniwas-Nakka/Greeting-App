const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/greetingMessage/', controller.createGreetingMessageController);
router.get('/getGreeting/:id', controller.readGreetingMessageController);
router.get('/getGreetings', controller.getAllGreetingsController);
router.put('/editGreetings/:id', controller.editGreetingsController);
router.delete('/deleteGreeting/:id', controller.deteleGreetingsController);

module.exports = router;
