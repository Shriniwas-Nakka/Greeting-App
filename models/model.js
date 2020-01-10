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
        console.log(req)
        const greeting = new greetings(req);
        greeting.save((err, data) => {
            if (err) {
                return callback({message: "Failed to create greeting!", error: err});
            } else {
                return callback(null, {message: "Greeting created!", result: data});
            }
        })
    }
}

module.exports = new model();