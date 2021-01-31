import { IDatabase } from '#SqlDatabase/types';
import { IExpressServer } from '#ExpressServer/types';
import { IRabbitMQClient } from '#FakeRabbitMQClient/types';

class TodoListApi {
  private database: IDatabase;
  private expressServer: IExpressServer;
  private rabbitMQClient: IRabbitMQClient;

  constructor(database: IDatabase, expressServer: IExpressServer, rabbitMQClient: IRabbitMQClient) {
    this.database = database;
    this.expressServer = expressServer;
    this.rabbitMQClient = rabbitMQClient;
  }

  start() {
    this.database.connect().then(() => {
      this.rabbitMQClient.connect();
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
