import express, {Request, Response} from 'express';
import Controller from "./Controller.interface";
import Model from '../models/Model';

export default class HomeController implements Controller {

  public router = express.Router();
  readonly path = '/'
  model = null;

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.index);
  }

  public async index(req: Request, res: Response): Promise<void> {
    try {
      // Your controller logic goes here
      res.status(200).json({message: 'Welcome to Typescript Framework!'});
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Internal server error'});
    }
  }

}