const express = require("express");
const routes = express.Router();

const db = require("../data/helpers/projectModel");

routes.get("/api/projects", async (req, res, next) => {
  try {
    const projects = await db.get();
    res.status(200).json(projects);
  } catch (e) {
    next({ status: 500, message: "Could not find projects" });
  }
});

routes.post("/api/projects", async (req, res, next) => {
  const { body } = req;

  if (!body.name || !body.description) {
    next({
        status: 400,
        message: "A name and description must be provided"
    })
  }

  try {
    const project = await db.insert(req.body);
    res.status(200).json(project);
  } catch (e) {
    next({ status: 500, message: "Could not create project" });
  }
});

routes.put("/api/projects/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    next({
      status: 400,
      message: "Please provide an id"
    });
  }

  try {
    const project = await db.update(id, req.body);

    if (!project) {
      next({
        status: 404,
        message: `Project with id ${id} could not be found`
      });
    }

    res.status(201).json(project);
  } catch (e) {
    next({
      status: 501,
      message: `Could not update record ${id}`
    });
  }
});

routes.delete("/api/projects/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    next({
      status: 400,
      message: "Please provide an id"
    });
  }

  try {
    const deletedProject = await db.remove(id);

    if (!deletedProject) {
      next({
        status: 404,
        message: `Project with id ${id} could not be found`
      });
    }

    res.status(201).json(deletedProject);
  } catch (e) {
    next({
      status: 501,
      message: `Could not delete record ${id}`
    });
  }
});

module.exports = routes;
