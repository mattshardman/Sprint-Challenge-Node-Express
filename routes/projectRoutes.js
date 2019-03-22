const express = require('express');
const routes = express.Router();

const db = require('../data/helpers/projectModel');

routes.get('/api/projects', async (req, res, next) => {
    try {
        const projects = await db.get();
        res.status(200).json(projects);
    } catch (e) {
        next({ status: 500, message: 'Could not find projects' });
    }
})

routes.post('/api/projects', async (req, res, next) => {
    try {
        const project = await db.insert(req.body);
        res.status(200).json(project);
    } catch (e) {
        next({ status: 500, message: 'Could not create project' });
    }
})

module.exports = routes;
