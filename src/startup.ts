import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import TodoListApi from '#TodoListApi';

const sqlDatabase = new SqlDatabase({
  database: <string>process.env.DB_NAME,
  user: <string>process.env.DB_USER,
  password: <string>process.env.DB_PASS,
  host: <string>process.env.DB_HOST,
});
const expressServer = new ExpressServer(parseInt(<string>process.env.PORT, 10));

const todoListApi = new TodoListApi(sqlDatabase, expressServer);
todoListApi.start();
