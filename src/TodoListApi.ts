import { IDatabase } from '#SqlDatabase/types';
import { IExpressServer } from '#ExpressServer/types';
import GraphQLServer from '#GraphQL';

class TodoListApi {
  database: IDatabase;
  expressServer: IExpressServer;
  graphQL: GraphQLServer;

  constructor(database: IDatabase, expressServer: IExpressServer, graphQL: GraphQLServer) {
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
