const mongoose = require('mongoose');

const { Schema } = mongoose;

const VisitorSchema = new Schema({
    visitorType: {
        type: String,
        required: true
    }
});

const Visitor = mongoose.model('Visitor', VisitorSchema);
module.exports = Visitor;