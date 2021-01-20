import ExpressServer from '#ExpressServer';
import Services from './Services';
import { IRunnable } from './types';

class TodoListApi implements IRunnable {
  expressServer: ExpressServer;
  services: Services;

  constructor() {
    const expressServerPort = parseInt(<string>process.env.PORT, 10);
    this.services = new Services();
    this.expressServer = new ExpressServer(expressServerPort);
  }

  start() {
    this.services.loadServicesOnExpress(this.expressServer);
    this.expressServer.start();
  }

  stop() {
    this.expressServer.stop();
  }
}

export default TodoListApi;
