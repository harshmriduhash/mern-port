const express = require('express');
const router = express.Router();

const Inventory = require('../../models/Inventory');
const keys = require('../../config/keys');

router.get('/test', (req, res) => res.json({ msg: 'This is a test' }));

router.post('/index', (req, res) => {
    if(req.body.trailsAuth === keys.trailsAuth) {
        Inventory.find()
            .then((files) => {
                res.json(files)
            })
            .catch((err) => res.status(404).json({ noTasksFound: 'No trails found', err }));
    } else {
        res.send('Good Try')
    }
})

module.exports = router;
