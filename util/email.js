const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tarikportfolio37@gmail.com',
        pass: keys.emailAddressKey
    }
});

module.exports = transporter;