const express = require('express');

const bonneBoiteRoutes = require('./routes/bonneBoite');
const codeMetiersRomes = require('./routes/romes');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/bonneBoite', bonneBoiteRoutes);
app.use('/api/codesMetiersRomes', codeMetiersRomes);


module.exports = app;