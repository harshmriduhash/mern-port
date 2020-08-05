const mongoose = require('mongoose');

const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: false
    },
    authorQuote: {
        type: String,
        required: false
    },
    ownerId: {
        type: Number
    },
    locationURL: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;