import ExpressServer from '#ExpressServer';
import { IRunnable } from './types';

class TodoListApi implements IRunnable {
  expressServer: ExpressServer;

  constructor() {
    const expressServerPort = parseInt(<string>process.env.PORT, 10);
    this.expressServer = new ExpressServer(expressServerPort);
  }

  start() {
    this.expressServer.start();
  }

  stop() {
    this.expressServer.stop();
  }
}

export default TodoListApi;
