import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { ITodoListApi } from './types';
import { IExpressServer } from '#ExpressServer/types';
import { IDatabase } from '#SqlDatabase/types';
import { IControllers } from './Controllers/types';

@injectable()
class TodoListApi implements ITodoListApi {
  @inject(DependencyTypes.IExpressServer)
  _expressServer!: IExpressServer;
  @inject(DependencyTypes.IDatabase)
  _database!: IDatabase;
  @inject(DependencyTypes.IControllers)
  _controllers!: IControllers;

  start() {
    this._database.connect().then(() => {
      this._controllers.loadControllersOnExpress();
      this._expressServer.start();
    });
  }

  stop() {
    this._database.disconnect().then(() => {
      this._expressServer.stop();
    });
  }
}

export default TodoListApi;
