const express = require('express');
const routes = express.Router();

const db = require('../data/helpers/actionModel');

routes.get('/api/actions', async (req, res, next) => {
    try {
        throw 'woops'
    } catch (e) {
        next({ status: 500, message: 'Could not get actions' });
    }
});

module.exports = routes;