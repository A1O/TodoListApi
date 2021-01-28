import { inject } from 'inversify';
import { controller, interfaces, httpPost, httpGet, request, response } from 'inversify-express-utils';
import express from 'express';
import { DependencyTypes } from '#Container/types';
import { ITaskService } from '#Services/types';

@controller('/tasks')
export class TaskController implements interfaces.Controller {
  @inject(DependencyTypes.ITaskService)
  private _taskService!: ITaskService;

  @httpPost('/')
  private async createTesk(@request() { body }: express.Request, @response() res: express.Response) {
    return res.send(await this._taskService.createTask(body));
  }

  @httpGet('/')
  private async getTasks(@response() res: express.Response) {
    return res.send(await this._taskService.getUserTasks());
  }
}
