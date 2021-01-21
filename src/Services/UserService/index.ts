import httpContext from 'express-http-context';
import express from 'express';
import SqlDatabase from '#SqlDatabase';
import { authenticateJWT } from '#ExpressServer';
import JsonWebToken from './JsonWebToken';
import Service from '../Service';

class UserService extends Service {
  private jwtActions: JsonWebToken;

  constructor(sqlDatabase: SqlDatabase) {
    super(sqlDatabase);
    this.jwtActions = new JsonWebToken(<string>process.env.JWT_SECRET_KEY);
  }

  async login({ username, password }: { username: string; password: string }) {
    const user = await this.sqlDatabase.UserRepository.getUser({ username, password });

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this.jwtActions.sign(user.id);
  }

  async register({ username, password }: { username: string; password: string }) {
    // TODO: Check if valid data

    const userExists = await this.sqlDatabase.UserRepository.getUser({ username });
    if (userExists) {
      throw new Error('User with this username already exists!');
    }

    const user = await this.sqlDatabase.UserRepository.createUser(username, password);

    return user;
  }

  async createTask({ title, description }: { title: string; description?: string }) {
    const userId = httpContext.get('userId');
    const user = await this.sqlDatabase.UserRepository.getUser(userId);

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.createTask({ title, description });
  }

  private async getUserTasks() {
    const userId = httpContext.get('userId');
    const user = await this.sqlDatabase.UserRepository.getUser(userId);

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.getTasks();
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

    router.post('/task', authenticateJWT, async (req, res) => {
      try {
        const result = await this.createTask(req.body);
        res.send(result);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });

    router.get('/task', authenticateJWT, async (req, res) => {
      try {
        const result = await this.getUserTasks();
        res.send(result);
      } catch (error) {
        res.status(400).send(error.message);
      }
    });

    return router;
  }
}

export default UserService;
