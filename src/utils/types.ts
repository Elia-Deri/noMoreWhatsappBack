import * as core from "express-serve-static-core";
import { Request, Response } from "express";

export interface Req<params = core.ParamsDictionary, body = any>
  extends Request<params, any, body, core.Query, core.Locals> {}

export interface Res extends Response<any, core.Locals> {}
