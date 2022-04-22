const express = require('express');
const router = express.Router();

const controllerInsee = require('../controllers/insee.js');

router.get('/fromCommune', controllerInsee.getCodeInseeFromCommune);

module.exports = router;