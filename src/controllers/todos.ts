import { Req, Res } from "../utils/types/GeneralReqRes.js";
import { CreateTodoReq } from "./types/todos.js";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";

export async function getTodos(req: Req, res: Res) {
  try {
    const db = getFirestore();
    const todos = collection(db, "todos");
    const q = query(todos);

    const result = await getDocs(q);

    res.json(result.docs.map((res) => res.data()));
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
}

export async function createTodo(req: Req<any, CreateTodoReq>, res: Res) {
  try {
    const db = getFirestore();
    const todos = collection(db, "todos");
    const document = doc(todos, req.body.name);

    const result = await setDoc(document, {
      name: req.body.name,
      done: false,
      created: new Date(),
    });
    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
}
