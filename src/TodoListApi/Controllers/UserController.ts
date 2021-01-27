import express from 'express';
import { inject, injectable } from 'inversify';
import { IExpressServer } from '#ExpressServer/types';
import { DependencyTypes } from '#Container/types';
import { authenticateJWT } from '#ExpressServer';
import { IUserService } from '#TodoListApi/Services/types';
import { IUserController } from './types';

@injectable()
class UserController implements IUserController {
  @inject(DependencyTypes.IUserService)
  private _userService!: IUserService;
  @inject(DependencyTypes.IExpressServer)
  private _expressServer!: IExpressServer;

  loadUserControllerOnExpress() {
    const router = express.Router();
    router.post('/login', async ({ body }, res) => res.send(await this._userService.login(body)));
    router.post('/register', async ({ body }, res) => res.send(await this._userService.register(body)));
    router
      .route('/task')
      .all(authenticateJWT)
      .post(async ({ body }, res) => res.send(await this._userService.createTask(body)))
      .get(async (_, res) => res.send(await this._userService.getUserTasks()));

    this._expressServer.use('/user', router);
  }
}

export default UserController;
