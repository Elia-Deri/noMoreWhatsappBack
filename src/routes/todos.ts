import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todos.js";

export const todosRouter = Router();

todosRouter.get("/", getTodos);

todosRouter.post("/createTodo", createTodo);
