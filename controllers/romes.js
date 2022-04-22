const axios = require('axios');
const { status } = require('express/lib/response');
const getToken = require('../outils/auth');

exports.getCodeMetiersRomes = async (req, res, next) => {

    tokenUsed = await getToken('api_romev1 nomenclatureRome');
    isRequestOk = true;
    messageErreur = {};

    try {
        reponse = await axios.get('https://api.emploi-store.fr/partenaire/rome/v1/metier', {
            headers: {
                Authorization: `Bearer ${tokenUsed}`
            }
        });
        res.status(reponse.status).json(
            reponse.data
        );

    } catch (error) {
        res.status(500).json({
            message: error
        })
    };



};