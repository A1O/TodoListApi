import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import TodoListApi from '#TodoListApi';
import container from '#Container';

const database = new SqlDatabase();
const expressServer = new ExpressServer(container);
const todoListApi = new TodoListApi(database, expressServer);

todoListApi.start();
