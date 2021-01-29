import { IDatabase } from '#SqlDatabase/types';
import { IExpressServer } from '#ExpressServer/types';
import { IGraphQLServer } from '#GraphQL/types';

class TodoListApi {
  database: IDatabase;
  expressServer: IExpressServer;
  graphQL: IGraphQLServer;

  constructor(database: IDatabase, expressServer: IExpressServer, graphQL: IGraphQLServer) {
    this.database = database;
    this.expressServer = expressServer;
    this.graphQL = graphQL;
  }

  start() {
    this.database.connect().then(() => {
      this.expressServer.start();
      this.graphQL.setExpressServer(this.expressServer);
    });
  }

  stop() {
    this.database.disconnect().then(() => {
      this.expressServer.stop();
    });
  }
}

export default TodoListApi;
