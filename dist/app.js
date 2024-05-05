import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { initializeFirebase } from "./dbConnection.js";
import morgan from "morgan";
import { todosRouter } from "./routes/todos.js";
import bodyParser from "body-parser";
dotenv.config();
export const app = express();
app.listen(420, () => {
    console.log("Server is listening to port 420 :)");
});
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50kb", extended: false }));
app.use((a, b, next) => {
    initializeFirebase();
    next();
});
app.use("/api/todos", todosRouter);
app.use("/api/hi", (req, res) => res.json("👍"));
