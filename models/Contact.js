const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContactSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;