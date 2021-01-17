import ExpressServer, { IExpressServer } from '#ExpressServer';

class TodoListApi {
  expressServer: IExpressServer;

  constructor() {
    const expressServerPort = parseInt(<string>process.env.PORT, 10);
    this.expressServer = new ExpressServer(expressServerPort);
  }

  start() {
    // All servers will be started here
    /*
    Example:
      constructor() {
        this.sqlDatabase = new SqlDatabase(...);
        this.expressServer = new ExpressServer(...);
      }

      start() {
        this.sqlDatabase.connect();
        this.expressServer.setSqlDatabase(this.sqlDatabase);
        this.expressServer.start();
      }
    */
    this.expressServer.start();
  }

  stop() {
    // All server will be stoped here
    this.expressServer.stop();
  }
}

export default TodoListApi;
