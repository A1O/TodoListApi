import 'reflect-metadata';
import container from '#Container';
import SqlDatabase from '#SqlDatabase';
import FakeRabbitMQClient from '#FakeRabbitMQ';
import GraphQLServer from '#GraphQL';
import ExpressServer from '#Express';
import TodoListApi from '#TodoListApi';

// Database
const database = new SqlDatabase();

// RabbitMQ
const rabbitMQClient = new FakeRabbitMQClient(container);

// API
const graphQLServer = new GraphQLServer(container, rabbitMQClient);
const expressServer = new ExpressServer(container);
graphQLServer.setExpressServer(expressServer);

// TodoListApi
const todoListApi = new TodoListApi(database, expressServer, rabbitMQClient);
todoListApi.start();
