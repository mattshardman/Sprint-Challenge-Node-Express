const express = require("express");
const routes = express.Router();

const db = require("../data/helpers/actionModel");

routes.get("/api/actions", async (req, res, next) => {
  try {
    const actions = await db.get();
    res.status(200).json(actions);
  } catch (e) {
    next({ status: 500, message: "Could not get actions" });
  }
});

routes.post("/api/actions", async (req, res, next) => {
  const { body } = req;

  if (!body.project_id || !body.description || !body.notes)
    [
      next({
        status: 400,
        message: "A project_id, description and notes must be provided"
      })
    ];

  try {
    const action = await db.insert(req.body);
    res.status(200).json(action);
  } catch (e) {
    next({
      status: 500,
      message: "Could not create an action"
    });
  }
});

routes.put("/api/actions/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    next({
      status: 400,
      message: "Please provide an id"
    });
  }

  try {
    const action = await db.update(id, req.body);

    if (!action) {
      next({
        status: 404,
        message: `Action with id ${id} could not be found`
      });
    }

    res.status(201).json(action);
  } catch (e) {
    next({
      status: 501,
      message: `Could not update record ${id}`
    });
  }
});

routes.delete("/api/actions/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    next({
      status: 400,
      message: "Please provide an id"
    });
  }

  try {
    const deletedAction = await db.remove(id);
    console.log(deletedAction)

    if (!deletedAction) {
      next({
        status: 404,
        message: `Action with id ${id} could not be found`
      });
    }

    res.status(201).json(deletedAction);
  } catch (e) {
    next({
      status: 501,
      message: `Could not delete record ${id}`
    });
  }
});

module.exports = routes;
