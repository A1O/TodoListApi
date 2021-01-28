// import { inject, injectable } from 'inversify';
// import { IExpressServer } from '#ExpressServer/types';
// import { DependencyTypes } from '#Container/types';
// import { ITaskService } from '#Services/types';

// @injectable()
// class TaskController {
//   @inject(DependencyTypes.ITaskService)
//   private _taskService!: ITaskService;
//   @inject(DependencyTypes.IExpressServer)
//   private _expressServer!: IExpressServer;

//   loadTaskControllerOnExpress() {
//     this._expressServer.post('/task', async ({ body }, res) => res.send(await this._taskService.createTask(body)));
//     this._expressServer.get('/tasks', async (_, res) => res.send(await this._taskService.getUserTasks()));
//   }
// }

// export default TaskController;
export default 0;
