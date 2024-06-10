import {Router} from "express";
import Model from "../models/Model";

export default interface Controller {
  router: Router,
  readonly path: string,
  model: Model | null
};