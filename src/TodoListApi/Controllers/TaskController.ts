import express from 'express';
import { inject, injectable } from 'inversify';
import { IExpressServer } from '#ExpressServer/types';
import { DependencyTypes } from '#Container/types';
import { authenticateJWT } from '#ExpressServer';
import { ITaskService } from '#TodoListApi/Services/types';
import { ITaskController } from './types';

@injectable()
class TaskController implements ITaskController {
  @inject(DependencyTypes.ITaskService)
  private _taskService!: ITaskService;
  @inject(DependencyTypes.IExpressServer)
  private _expressServer!: IExpressServer;

  loadTaskControllerOnExpress() {
    const router = express.Router();
    router
      .route('/')
      .all(authenticateJWT)
      .post(async ({ body }, res) => res.send(await this._taskService.createTask(body)))
      .get(async (_, res) => res.send(await this._taskService.getUserTasks()));

    this._expressServer.use('/task', router);
  }
}

export default TaskController;
