import express from "express";

export const app = express();

app.listen(3000, () => {
  console.log("Server is listening to port 3000 :)");
});

app.get("/", (req, res) => res.send("yo baduk"));
