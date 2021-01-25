import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import { IRunnable } from './types';
import Services from './Services';

class TodoListApi implements IRunnable {
  sqlDatabase: SqlDatabase;
  expressServer: ExpressServer;
  services: Services;

  constructor(sqlDatabase: SqlDatabase) {
    this.sqlDatabase = sqlDatabase;
    this.services = new Services(this.sqlDatabase);
    this.expressServer = new ExpressServer(parseInt(<string>process.env.PORT, 10));
  }

  load() {
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
