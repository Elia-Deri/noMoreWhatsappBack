import { createNewDoc } from "../controllers/dbFunctions";
import { Router } from "express";

export const dbRouter = Router();

dbRouter.post("addDoc", createNewDoc);
