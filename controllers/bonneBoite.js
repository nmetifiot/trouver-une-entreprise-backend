const axios = require('axios');
const { status } = require('express/lib/response');
const getToken = require('../outils/auth');

/**
 * 
 * @param {*} req - requête 
 * @param {*} res - réponse
 * @param {*} next - passe à la prochaine fonction
 */
exports.getEntrepriseCodeInseeCodeRome = async (req, res, next) => {

    tokenUsed = await getToken();
    isRequestOk = true;
    messageErreur = {};

    if (!req.query.codeInsee) {
        messageErreur["codeInsee"] = "champ codeInsee obligatoire, le code insee de la ville est obligatoire";
        isRequestOk = false;
    };
    if (!req.query.codeRome) {
        messageErreur["codeRome"] = "champ codeRome obligatoire, le code métier recherché est obligatoire";
        isRequestOk = false;
    };


    if (isRequestOk) {
        try {

            reponse = await axios.get('https://api.emploi-store.fr/partenaire/labonneboite/v1/company/', {
                params: {
                    commune_id: req.query.codeInsee,
                    rome_codes: req.query.codeRome
                },
                headers: {
                    Authorization: `Bearer ${tokenUsed}`
                }
            });
            res.status(reponse.status).json({
                entreprises: reponse.data.companies,
                nombre_entreprises: reponse.data.companies_count,
                rome_code: reponse.data.rome_code,
                rome_label: reponse.data.rome_label,
                url: reponse.data.url
            });
        } catch (error) {
            res.status(500).json({
                message: error
            })
        };
    } else {
        res.status(500).json(messageErreur);
    }

};