import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import { IRunnable } from './types';
import Services from './Services';

class TodoListApi implements IRunnable {
  sqlDatabase: SqlDatabase;
  expressServer: ExpressServer;
  services: Services;

  constructor() {
    this.sqlDatabase = new SqlDatabase({
      database: <string>process.env.DB_NAME,
      user: <string>process.env.DB_USER,
      password: <string>process.env.DB_PASS,
      host: <string>process.env.DB_HOST,
    });
    this.services = new Services(this.sqlDatabase);
    this.expressServer = new ExpressServer(parseInt(<string>process.env.PORT, 10));
  }

  load() {
    this.services.loadServicesOnExpress(this.expressServer);
  }

  start() {
    this.sqlDatabase.connect();
    this.expressServer.start();
  }

  stop() {
    this.expressServer.stop();
    this.sqlDatabase.disconnect();
  }
}

export default TodoListApi;
