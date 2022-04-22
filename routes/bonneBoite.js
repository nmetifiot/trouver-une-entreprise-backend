const express = require('express');
const router = express.Router();

const controllerbonneBoite = require('../controllers/bonneBoite');

router.get('/', controllerbonneBoite.getEntrepriseCodeInseeCodeRome);

module.exports = router;