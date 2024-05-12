import { Response } from "express";
import { z } from "zod";

export function handleZodError(res: Response, err: unknown) {
  if (err instanceof z.ZodError) {
    console.log(err.issues);
    res.status(500).send(err.issues);
  } else {
    console.log(err);
    res.status(400).send({ message: err });
  }
}
