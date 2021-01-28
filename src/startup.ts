import 'reflect-metadata';
import container from '#Container';
import SqlDatabase from '#SqlDatabase';
import ExpressServer from '#ExpressServer';
import TodoListApi from '#TodoListApi';
import GraphQLServer from '#GraphQL';

const database = new SqlDatabase();
const graphQLServer = new GraphQLServer();
const expressServer = new ExpressServer(container);
const todoListApi = new TodoListApi(database, expressServer, graphQLServer);

todoListApi.start();
