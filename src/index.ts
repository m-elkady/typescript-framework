import 'dotenv/config'
import App from "./App";
import HomeController from "./controllers/HomeController";
import AuthController from "./controllers/AuthController";

const port: number  = parseInt(process.env.NODE_PORT as string) || 3000 ;

new App([
  new HomeController(),
  new AuthController(),
], port);