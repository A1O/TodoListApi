import httpContext from 'express-http-context';
import express from 'express';
import { inject, injectable } from 'inversify';
import { authenticateJWT } from '#ExpressServer';
import { DependencyTypes } from '#Container/types';
import { IDatabase } from '#SqlDatabase/types';
import { IJsonWebToken, ITaskInput, IUserInput, IUserService } from './types';

@injectable()
class UserService implements IUserService {
  @inject(DependencyTypes.IDatabase)
  private _database!: IDatabase;
  @inject(DependencyTypes.IJsonWebToken)
  private _jwtActions!: IJsonWebToken;

  async login({ username, password }: IUserInput) {
    const user = await this._database._userRepository.getUser({ username, password });

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this._jwtActions.sign(user.id);
  }

  async register({ username, password }: IUserInput) {
    // TODO: Check if valid data

    const userExists = await this._database._userRepository.getUser({ username });
    if (userExists) {
      throw new Error('User with this username already exists!');
    }

    const user = await this._database._userRepository.createUser(username, password);

    return user;
  }

  async createTask({ title, description }: ITaskInput) {
    const userId = httpContext.get('userId');
    const user = await this._database._userRepository.getUser({ id: userId });

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.createTask({ title, description });
  }

  async getUserTasks() {
    const userId = httpContext.get('userId');
    const user = await this._database._userRepository.getUser({ id: userId });

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.getTasks();
  }

  prepareExpressRouter() {
    const router = express.Router();

    router.post('/login', async (req, res) => res.send(await this.login(req.body)));
    router.post('/register', async (req, res) => res.send(await this.register(req.body)));
    router.post('/task', authenticateJWT, async (req, res) => res.send(await this.createTask(req.body)));
    router.get('/task', authenticateJWT, async (_, res) => res.send(await this.getUserTasks()));

    return router;
  }
}

export default UserService;
