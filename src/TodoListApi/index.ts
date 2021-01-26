import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Inversify/types';
import { ITodoListApi } from './types';
import { IExpressServer } from '#ExpressServer/types';
import { IDatabase } from '#SqlDatabase/types';

@injectable()
class TodoListApi implements ITodoListApi {
  @inject(DependencyTypes.IExpressServer)
  _expressServer!: IExpressServer;
  @inject(DependencyTypes.IDatabase)
  _database!: IDatabase;

  start() {
    this._database.connect().then(() => {
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
