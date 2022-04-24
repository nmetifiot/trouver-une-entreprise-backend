const express = require('express');
const router = express.Router();

const controllerInsee = require('../controllers/insee.js');

/**
 * @swagger
 * /api/codesInsee/fromCommune:
 *   get:
 *     description: Donne la liste des communes et leur code insee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nom
 *         in: query
 *         type: string
 *         description: Nom de la commune
 *     responses:
 *          '200':
 *              description: OK
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *                          exemple: pong
 */
router.get('/fromCommune', controllerInsee.getCodeInseeFromCommune);

module.exports = router;