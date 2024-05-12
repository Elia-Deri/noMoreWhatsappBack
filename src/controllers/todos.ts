import { Req, Res } from "../utils/types/GeneralReqRes.js";
import { CreateTodoReq } from "./types/todos.js";
import { client } from "../dbConnection.js";
import { todoSchema } from "../schemas/todos.js";
import { handleZodError } from "../utils/error/zodError.js";

const collection = client.db("todos").collection("todos");

export async function getTodos(req: Req, res: Res) {
  try {
    const result = await collection.find({}).toArray();

    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
}

export async function createTodo(req: Req<any, CreateTodoReq>, res: Res) {
  try {
    const validate = todoSchema.safeParse(req.body);
    if (validate.success) {
      await collection.insertOne(req.body);

      res.json({ message: "ייאי עוד משימה 😒" });
    } else {
      throw validate.error;
    }
  } catch (err) {
    handleZodError(res, err);
  }
}
