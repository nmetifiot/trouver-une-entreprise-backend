const express = require('express');

const bonneBoiteRoutes = require('./routes/bonneBoite');
const codeMetiersRomes = require('./routes/romes');
const codesInsee = require('./routes/insee');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Trouver une entreprises',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpecification = swaggerJsdoc(options);

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecification));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/bonneBoite', bonneBoiteRoutes);
app.use('/api/codesMetiersRomes', codeMetiersRomes);
app.use('/api/codesInsee', codesInsee);


module.exports = app;