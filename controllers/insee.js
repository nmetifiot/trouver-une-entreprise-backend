const axios = require('axios');
const { status } = require('express/lib/response');
const getToken = require('../outils/auth');

exports.getCodeInseeFromCommune = async (req, res, next) => {

    tokenUsed = await getToken('api_romev1 nomenclatureRome');
    isRequestOk = true;
    messageErreur = {};

    try {
        reponse = await axios.get('https://geo.api.gouv.fr/communes', {
            params: {
                nom: req.query.nom,
                limit: 5
            }
        });

        res.status(response.status).json(
            reponse.data
        );

    } catch (error) {
        res.status(500).json({
            message: error
        })
    };
}