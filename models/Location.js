const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
