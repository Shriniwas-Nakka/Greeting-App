let service = require('../service/service');

class controller {
    createGreetingMessageController(req, res) {
        let greetingData = {
            firstName: req.query.firstName,
            lastName: req.query.lastName,
        };
        service.createGreetingMessageService(greetingData, (err, data) => {
            if (err) {
                return res.status(400).send(err);
            } else {
                return res.status(200).send(data);
            }
        })
    }

    readGreetingMessageController(req, res) {
        let greetingData = {
            id: req.params.id
        };
        service.readGreetingMessageService(greetingData, (err, data) => {
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