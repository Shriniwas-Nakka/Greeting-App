let service = require('../service/service');

class controller {
    welcomeMessage(req, res) {
        res.send("Welcome To Greeting App");
    }

    helloWorldController(req, res) {
        let message = service.messageService();
        res.send(message);
    }

    createController(req, res) {
        let greetingData = {
            firstName: req.params.firstName,
            lastName: req.params.lastName,
        };
        service.greetingMessageService(greetingData, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(200).send(data);
            }
        })
    }

    readController(req, res) {
        let greetingData = {
            id: req.params.id
        };
        service.readService(greetingData, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(200).send(data);
            }
        })
    }

    getAllGreetingsController(req, res) {
        let find = {};
        service.getAllGreetingsService(find, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(400).send(data);
            }
        })
    }

    editGreetingsController(req, res) {
        let editGreeting = {
            id: req.params.id,
            message: req.body.message
        };
        service.editGreetingsService(editGreeting, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(400).send(data);
            }
        });
    }

    deteleGreetingsController(req, res) {
        let deleteGreeting = {
            id: req.params.id
        };
        service.deleteGreetingsService(deleteGreeting, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(400).send(data);
            }
        });
    }
}

module.exports = new controller();