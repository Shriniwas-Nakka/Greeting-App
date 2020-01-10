let service = require('../service/service');

class controller {
    welcomeMessage(req, res) {
        res.send("Welcome To Greeting App");
    }

    helloWorldController(req, res) {
        let message = service.messageService()
        res.send(message);
    }

    createController(req, res) {
        let greetingData = {
            firstName: req.params.firstName,
            lastName: req.params.lastName,
        }
        service.greetingMessageService(greetingData, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(200).send(data);
            }
        })
    }
}

module.exports = new controller();