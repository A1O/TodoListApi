import 'reflect-metadata';
import container from '#Container';
import SqlDatabase from '#SqlDatabase';
import ExpressServer from '#ExpressServer';
import TodoListApi from '#TodoListApi';

const database = new SqlDatabase();
const expressServer = new ExpressServer(container);
const todoListApi = new TodoListApi(database, expressServer);

todoListApi.start();
