import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { ITodoListApi } from './types';
import { IExpressServer } from '#ExpressServer/types';
import { IDatabase } from '#SqlDatabase/types';
import { IServices } from './Services/types';

@injectable()
class TodoListApi implements ITodoListApi {
  @inject(DependencyTypes.IExpressServer)
  _expressServer!: IExpressServer;
  @inject(DependencyTypes.IDatabase)
  _database!: IDatabase;
  @inject(DependencyTypes.IServices)
  _services!: IServices;

  start() {
    this._database.connect().then(() => {
      this._services.loadServicesOnExpress(this._expressServer);
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
