import { createNewDoc } from "../controllers/dbFunctions.js";
import { Router } from "express";

export const dbRouter = Router();

dbRouter.post("/addDoc", createNewDoc);
