import Controller from './Controller.interface';
import { Request, Response, Router } from 'express';
import { IUser, UserModel } from '../models/UserModel';

export default class AuthController implements Controller {
  readonly path: string = '/';
  router: Router = Router();
  model: UserModel;

  constructor() {
    this.model = new UserModel();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/login', this.login);
    this.router.post('/register', this.register);
  }


  public login() {

  }

  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   * @returns Promise
   */
  register = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { username, password, email }: { username: string, password: string, email: string } = req.body;

      // Check if the user already exists
      const newUser: IUser = { username, password, email };
      const existingUser = await this.model.getUserByUsername<IUser>(newUser);

      if (existingUser) {
        res.status(400).json({ error: 'Username already exists' });
        return;
      }

      // Create a new user
      const user = await this.model.createUser<IUser>(newUser);

      res.status(201).json(user);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: error });
    }
  }

}