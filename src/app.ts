import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { dbRouter } from "./routes/dbRoutes";

dotenv.config();

export const app = express();

app.listen(3000, () => {
  console.log("Server is listening to port 3000 :)");
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/");
app.use("db", dbRouter);
