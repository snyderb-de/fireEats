/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
// catch errors by wrapping the storeController.createStore
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
