const express = require('express');
const routes = express.Router();

const db = require('../data/helpers/actionModel');

routes.get('/api/actions', async (req, res, next) => {
    try {
        const actions = await db.get();
        res.status(200).json(actions);

    } catch (e) {
        next({ status: 500, message: 'Could not get actions' });
    }
});

routes.post('/api/actions', async (req, res, next) => {
    try {
        const action = await db.insert(req.body);
        res.status(200).json(action);
    } catch (e) {
        next({ status: 500, message: 'Could not create an action' });
    }
});

module.exports = routes;