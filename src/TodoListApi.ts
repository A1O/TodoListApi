import { IDatabase } from '#SqlDatabase/types';
import { IExpressServer } from '#ExpressServer/types';

class TodoListApi {
  database: IDatabase;
  expressServer: IExpressServer;

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
