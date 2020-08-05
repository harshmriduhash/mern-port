const express = require('express');

const validateVisitorInput = require('../../validation/visitor');
const Visitor = require('../../models/Visitor')

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is the test route' }));

router.post('/visitor', (req, res) => {
    const { errors, isValid } = validateVisitorInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    const newVisitor = new Visitor({
        visitorType: req.body.visitorType
    });

    newVisitor.save()
        .then((visitor) => res.json(visitor))
        .catch(err => res.json(err))
});

module.exports = router;
