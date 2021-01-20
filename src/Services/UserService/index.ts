import express from 'express';
import SqlDatabase from '#SqlDatabase';
import JsonWebToken from './JsonWebToken';
import { IUser } from '#types';

class UserService {
  private jwtActions: JsonWebToken;
  private sqlDatabase: SqlDatabase;

  constructor(sqlDatabase: SqlDatabase) {
    this.jwtActions = new JsonWebToken(<string>process.env.JWT_SECRET_KEY);
    this.sqlDatabase = sqlDatabase;
  }

  private async login({ username, password }: IUser) {
    const user = await this.sqlDatabase.User.findOne({ where: { username, password } });

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this.jwtActions.sign(user.id);
  }

  private async register({ username, password }: IUser) {
    // TODO: Check if valid data

    const userExists = (await this.sqlDatabase.User.count({ where: { username } })) > 0;

    if (userExists) {
      throw new Error('User with this username already exists!');
    }

    const user = await this.sqlDatabase.User.create({ username, password });
    return user;
  }

  prepareExpressRouter() {
    const router = express.Router();

    router.post('/login', async (req, res) => {
      try {
        const result = await this.login(req.body);
        res.send(result);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });

    router.post('/register', async (req, res) => {
      try {
        const result = await this.register(req.body);
        res.send(result);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });

    return router;
  }
}

export default UserService;
