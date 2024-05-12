import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { todosRouter } from "./routes/todos.js";
import bodyParser from "body-parser";
import { client } from "./dbConnection.js";
dotenv.config();
export const app = express();
client.connect();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50kb", extended: false }));
app.use("/api/todos", todosRouter);
client.once("open", () => {
    app.listen(420, () => {
        console.log("We in 420 Baby B^)");
    });
});
//# sourceMappingURL=app.js.map