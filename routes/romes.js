const express = require('express');
const router = express.Router();

const controllerRomes = require('../controllers/romes.js');

router.get('/', controllerRomes.getCodeMetiersRomes);

module.exports = router;