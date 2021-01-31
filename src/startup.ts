import 'reflect-metadata';
import container from '#Container';
import SqlDatabase from '#SqlDatabase';
import ExpressServer from '#ExpressServer';
import TodoListApi from '#TodoListApi';
import GraphQLServer from '#GraphQL';
import FakeRabbitMQClient from '#FakeRabbitMQClient';

const database = new SqlDatabase();
const rabbitMQClient = new FakeRabbitMQClient(container);
const graphQLServer = new GraphQLServer(container, rabbitMQClient);
const expressServer = new ExpressServer(container);

graphQLServer.setExpressServer(expressServer);
const todoListApi = new TodoListApi(database, expressServer, rabbitMQClient);

todoListApi.start();
