const express = require('express');

const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    const wes = { name: 'Wes', age: 100, cool: false };
    // res.send(req.query.name);
    // res.json(req.query);
    res.render('hello', {
        name: 'bababooey',
        dog: req.query.dog,
    });
});

router.get('/reverse/:name', (req, res) => {
    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

/*
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
*/
module.exports = router;
