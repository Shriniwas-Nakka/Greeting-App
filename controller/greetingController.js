var service = require('../service/service');

class greetingController {
    welcomeMessage(req, res) {
        res.send("Welcome To Greeting App");
    }

    helloWorldController(req, res) {
        let message = service.messageService()
        res.send(message);
    }
}

module.exports = new greetingController();