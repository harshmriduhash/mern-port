const express = require('express');

const Location = require('../../models/Location');
const validateLocationInput = require('../../validation/location');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));

router.get('/', (req, res) => {
    Location.find()
        .sort({ date: -1 })
        .then((locations) => res.json(locations))
        .catch((err) => res.status(404).json({ noLocationsFound: 'No locations found' }));
})

router.post('/location', (req, res) => {
    const { body } = req;
    const { errors, isValid } = validateLocationInput(body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    const coordinates = body.location;
    
    const newLocation = new Location({
        location: coordinates
    });

    newLocation.save()
        .then((location) => {
            res.json(location)
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router;