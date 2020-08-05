const express = require('express');

const Contact = require('../../models/Contact');
const validateContactInput = require('../../validation/contact');
const transporter = require('../../util/email');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));

router.post('/contact', (req, res) => {
    const { body } = req;
    const { errors, isValid } = validateContactInput(body);

    if (!isValid) {
        return res.status(400).json(errors)
    };

    const newContact = new Contact({
        title: body.title,
        message: body.message,
        email: body.email
    }); 

    const mailOptions = {
        from: 'tarikportfolio37@gmail.com',
        to: 'tariksnow37@gmail.com',
        subject: `${body.title} from ${body.email}`,
        text: body.message
    };

    newContact.save()
        .then((contact) => {
            res.json(contact)
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        })
        .catch(err => res.json(err))
});

module.exports = router;