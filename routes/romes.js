const express = require('express');
const router = express.Router();

const controllerRomes = require('../controllers/romes.js');

/**
 * @swagger
 * /api/codesMetiersRomes:
 *   
 *   get:
 *     description: Donne la liste des métiers et leur code rome
 *     produces:
 *       - application/json
 *     responses:
 *          '200':
 *              description: OK
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: string
 *                          exemple: pong
 */
router.get('/', controllerRomes.getCodeMetiersRomes);

module.exports = router;