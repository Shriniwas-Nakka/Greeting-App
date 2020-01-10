const mongoose = require('mongoose');

const greetingSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    message: String
}, {
    timestamps: true
});

let greetings = mongoose.model('greetings', greetingSchema);

class model {
    create(req, callback) {
        const greeting = new greetings(req);
        greeting.save((err, data) => {
            if (err) {
                return callback({message: "Failed to create greeting!", error: err});
            } else {
                return callback(null, {message: "Greeting created!", result: data});
            }
        })
    }

    read(req, callback) {
        greetings.findById(req, (err, data) => {
            if (err) {
                return callback({message: "Failed to find greetings!", error: err})
            } else {
                return callback(null, {message: "Greetings Found", result: data.message})
            }
        })
    }
}

module.exports = new model();