import { Res } from "../utils/types/GeneralReqRes.js";

export async function getTodos(req, res: Res) {
  return res.send("hi");
}

export async function createTodo(req, res: Res) {
  return res.send("post");
}
