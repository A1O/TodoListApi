import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import { IRunnable } from './types';
import Services from './Services';

class TodoListApi implements IRunnable {
  sqlDatabase: SqlDatabase;
  expressServer: ExpressServer;
  services: Services;

  constructor() {
    this.expressServer = new ExpressServer(parseInt(<string>process.env.PORT, 10));
    this.sqlDatabase = new SqlDatabase({
      database: <string>process.env.DB_NAME,
      user: <string>process.env.DB_USER,
      password: <string>process.env.DB_PASS,
      host: <string>process.env.DB_HOST,
    });
    this.services = new Services(this.sqlDatabase);
  }

  start() {
    this.sqlDatabase.connect();
    this.expressServer.start();
    this.services.loadServicesOnExpress(this.expressServer);
  }

  stop() {
    this.expressServer.stop();
  }
}

export default TodoListApi;
