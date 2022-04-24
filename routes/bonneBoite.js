const express = require('express');
const router = express.Router();

const controllerbonneBoite = require('../controllers/bonneBoite');

/**
 * @swagger
 * /api/bonneBoite:
 *   get:
 *     description: Liste des entreprises
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: codeInsee
 *         in: query
 *         type: string
 *         description: Code Insee de la commune
 *       - name: codeRome
 *         in: query
 *         type: string
 *         description: Code Rome du métier recherché
 *     responses:
 *          '200':
 *              description: OK
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *                          exemple: pong
 */
router.get('/', controllerbonneBoite.getEntrepriseCodeInseeCodeRome);

module.exports = router;