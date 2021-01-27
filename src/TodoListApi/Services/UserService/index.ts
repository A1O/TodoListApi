import httpContext from 'express-http-context';
import { inject, injectable } from 'inversify';
import { authenticateJWT } from '#ExpressServer';
import { DependencyTypes } from '#Container/types';
import { IUserRepository } from '#SqlDatabase/types';
import { IJsonWebToken, ITaskInput, IUserInput, IUserService } from './types';
import { IExpressServer } from '#ExpressServer/types';

@injectable()
class UserService implements IUserService {
  @inject(DependencyTypes.IUserRepository)
  private _userRepository!: IUserRepository;
  @inject(DependencyTypes.IJsonWebToken)
  private _jwtActions!: IJsonWebToken;
  @inject(DependencyTypes.IExpressServer)
  private _expressServer!: IExpressServer;

  async login({ username, password }: IUserInput) {
    const user = await this._userRepository.getUser({ username, password });

    if (!user) {
      throw new Error('The username and password you entered did not match our records.');
    }

    return this._jwtActions.sign(user.id);
  }

  async register({ username, password }: IUserInput) {
    // TODO: Check if valid data

    const userExists = await this._userRepository.getUser({ username });
    if (userExists) {
      throw new Error('User with this username already exists!');
    }

    const user = await this._userRepository.createUser(username, password);

    return user;
  }

  async createTask({ title, description }: ITaskInput) {
    const userId = httpContext.get('userId');
    const user = await this._userRepository.getUser({ id: userId });

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.createTask({ title, description });
  }

  async getUserTasks() {
    const userId = httpContext.get('userId');
    const user = await this._userRepository.getUser({ id: userId });

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.getTasks();
  }

  loadExpressRoutes() {
    this._expressServer.post('/login', async ({ body }, { send }) => send(await this.login(body)));
    this._expressServer.post('/register', async ({ body }, { send }) => send(await this.register(body)));
    this._expressServer
      .route('/task')
      .all(authenticateJWT)
      .post(async ({ body }, { send }) => send(await this.createTask(body)))
      .get(async (_, { send }) => send(await this.getUserTasks()));
  }
}

export default UserService;
