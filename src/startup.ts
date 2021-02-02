import 'reflect-metadata';
import container from '#Container';
import SqlDatabase from '#SqlDatabase';
import GraphQLServer from '#GraphQL';
import ExpressServer from '#Express';
import TodoListApi from '#TodoListApi';

async function startup() {
  // Database
  const database = new SqlDatabase();

  // API
  const graphQLServer = await GraphQLServer.build(container);
  const expressServer = new ExpressServer(container);
  graphQLServer.setExpressServer(expressServer);

  // TodoListApi
  const todoListApi = new TodoListApi(database, expressServer);
  todoListApi.start();
}

startup();
