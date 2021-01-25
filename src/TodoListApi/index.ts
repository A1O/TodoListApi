import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import { IRunnable } from '../types';
import Services from './Services';

class TodoListApi implements IRunnable {
  sqlDatabase: SqlDatabase;
  expressServer: ExpressServer;
  services: Services;

  constructor(sqlDatabase: SqlDatabase, expressServer: ExpressServer) {
    this.sqlDatabase = sqlDatabase;
    this.expressServer = expressServer;
    this.services = new Services(this.sqlDatabase);
    this.services.loadServicesOnExpress(this.expressServer);
  }

  start() {
    this.sqlDatabase.connect().then(() => {
      this.expressServer.start();
    });
  }

  stop() {
    this.expressServer.stop();
    this.sqlDatabase.disconnect();
  }
}

export default TodoListApi;
