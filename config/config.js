const mongoose = require('mongoose');
const config = require('../config/config.json');

mongoose.connect(config.url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database!");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});