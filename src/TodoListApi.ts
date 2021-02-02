import type { IDatabase } from '#SqlDatabase/types';
import type { IExpressServer } from '#Express/types';

class TodoListApi {
  private database: IDatabase;
  private expressServer: IExpressServer;

  constructor(database: IDatabase, expressServer: IExpressServer) {
    this.database = database;
    this.expressServer = expressServer;
  }

  start() {
    this.database.connect().then(() => {
      this.expressServer.start();
    });
  }

  stop() {
    this.database.disconnect().then(() => {
      this.expressServer.stop();
    });
  }
}

export default TodoListApi;
