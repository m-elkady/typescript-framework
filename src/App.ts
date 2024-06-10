import express, { Application } from 'express';
import Controller from "./controllers/Controller.interface";
import { connect } from './config/db';

export default class App {

  public app: Application;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes(controllers);
    this.connectToDatabase();
    this.listen(port);
  }

  public initializeMiddlewares(){
    this.app.use(express.json());
  }

  public connectToDatabase(){
    connect()
  }

  public initializeRoutes(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use(controller.router);
    });
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }

}