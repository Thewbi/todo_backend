import express from "express";
import "reflect-metadata";

import { Todo } from "../entity/Todo";
import { getManager } from "typeorm";

var todoRouter = express.Router();

// Create / Update
todoRouter.post("/create", async function (req, res, next) {
  const todo = req.body;

  // get a repository to perform operations
  const repository = getManager().getRepository(Todo);

  let savedEntity = repository.save(todo).then((todo) => {
    res.send(todo);
  });
});

// Retrieve
todoRouter.get("/all", async function (req, res, next) {
  // get a repository to perform operations
  const repository = getManager().getRepository(Todo);

  // load all entities
  const todos = await repository.find();

  // return loaded entities
  res.send(todos);
});

// Retrieve
todoRouter.get("/:id", async function (req, res, next) {
  // get a repository to perform operations
  const repository = getManager().getRepository(Todo);

  // load all entities
  const todos = await repository.findOne(req.params.id);

  // return loaded entities
  res.send(todos);
});

// Delete
todoRouter.delete("/delete/:id", async function (req, res, next) {
  // get a repository to perform operations
  const repository = getManager().getRepository(Todo);

  // delete entity
  const todo = await repository.delete(req.params.id);

  // return loaded entities
  res.send(todo);
});

export default todoRouter;
