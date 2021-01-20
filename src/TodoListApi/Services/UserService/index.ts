import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import JsonWebToken from './JsonWebToken';
import { IUser } from './types';

const USERS: IUser[] = [];

class UserService {
  private jwtActions: JsonWebToken;

  constructor() {
    const jwtSecretKey = <string>process.env.JWT_SECRET_KEY;
    this.jwtActions = new JsonWebToken(jwtSecretKey);
  }

  private login({ username, password }: IUser) {
    const user = USERS.find((v) => v.username === username && v.password === password);

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this.jwtActions.sign(user.id);
  }

  private register({ username, password }: IUser) {
    // CHECK IF VALID DATA

    const newUser: IUser = {
      id: uuidv4(),
      username,
      password,
    };
    USERS.push(newUser);

    return newUser;
  }

  prepareExpressRouter() {
    const router = express.Router();

    router.post('/login', (req, res) => {
      try {
        const result = this.login(req.body);
        res.send(result);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });

    router.post('/register', (req, res) => {
      try {
        res.send(this.register(req.body));
      } catch (error) {
        res.status(400).send(error.message);
      }
    });

    return router;
  }
}

export default UserService;
