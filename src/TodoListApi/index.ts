import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Inversify/types';
import { ITodoListApi } from './types';
import { IExpressServer } from '#ExpressServer/types';

@injectable()
class TodoListApi implements ITodoListApi {
  @inject(DependencyTypes.IExpressServer)
  _expressServer!: IExpressServer;

  start() {
    this._expressServer.start();
  }

  stop() {
    this._expressServer.stop();
  }
}

export default TodoListApi;
