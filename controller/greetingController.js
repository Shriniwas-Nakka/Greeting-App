var service = require('../service/service');

class greetingController {
    welcomeMessage(req, res) {
        res.send("Welcome To Greeting App");
    }

    helloWorldController(req, res) {
        let message = service.messageService()
        res.send(message);
    }

    greetingMessage(req, res) {
        let message = {
            firstName: req.params.firstName,
            lastName: req.params.lastName,
        };

        let greetingMessage = service.greetingMessageService(message);
        res.send(greetingMessage);
    }
}

module.exports = new greetingController();