import Model from './Model';

export interface IUser {
  id?: number;
  username: string;
  password: string;
  email?: string;
  role?: string;
}

export class UserModel extends Model {

  /**
   * 
   * @param {IUser} user 
   * @returns Promise<number>
   */
  public async createUser<User extends IUser>(user: User): Promise<User> {
    return super.insert('INSERT INTO users set ?', user).then((id) => ({id, ...user}));
  }

  /**
   * 
   * @param {string} username 
   * @returns Promise<any>
   */
  public async getUserByUsername<User extends IUser>(user: User): Promise<IUser> {
    return await super.query('SELECT * FROM users WHERE ?? = ?', ['username', user.username]);
  }
}