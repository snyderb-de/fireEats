const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    res.send('Yo yo yo! You working baby!!');
});

module.exports = router;
