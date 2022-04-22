const axios = require('axios');


getToken = async function () {

    var postData = {
    };

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            realm: 'partenaire',
            client_id: 'PAR_trouveruneentreprise_3ad05c342b367ae9ce78558d8958c2d40191675b689375cc0d7197df37453ecd',
            client_secret: '11e2a304f4292a833985d8e5d9fcd299b693668d10cd08edb421dd7b70a8edb7',
            grant_type: 'client_credentials',
            scope: 'api_labonneboitev1'
        }
    };
    try {
        response = await axios.post('https://entreprise.pole-emploi.fr/connexion/oauth2/access_token', postData, axiosConfig)

        return response.data.access_token;
    } catch (error) {
        console.log(error);
    };
};

module.exports = getToken;
