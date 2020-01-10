const model = require('../models/model');

class Service {
    messageService() {
        return "Hello World!";
    }

    greetingMessageService(req, callback) {
        let greetingData = {
            firstName: req.firstName,
            lastName: req.lastName,
            message: `Welcome ${req.firstName} ${req.lastName} to Greeting App!`
        };
        model.create(greetingData, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }

    readService(req, callback) {
        let findGreeting = {
            "_id": req.id
        };
        model.read(findGreeting, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }

    getAllGreetingsService(req, callback) {
        model.read(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }

    editGreetingsService(req, callback) {
        let editGreeting = {
            findId: {"_id": req.id},
            updateMessage: {"message": req.message}
        };
        model.update(editGreeting, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        });
    }
}

module.exports = new Service();