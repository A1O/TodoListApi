import express from 'express';
import { Server } from 'http';
import { IExpressServer } from './types';

class ExpressServer implements IExpressServer {
  app: express.Application;
  areRoutesSetted: boolean;
  httpServer?: Server;
  port: number;

  constructor(port?: number) {
    this.app = express();
    this.areRoutesSetted = false;
    this.port = port || 3000;
  }

  start() {
    this.setRoutes();
    this.startListening();
    console.debug(`Express app is started and listening on ${this.port}...`);
  }

  stop() {
    if (this.stopListening()) {
      console.debug(`Express app was stopped...`);
    }
  }

  private setRoutes() {
    if (!this.areRoutesSetted) {
      this.app.get('/', (_, res) => {
        res.send('Hello, world!');
      });

      this.app.get('/test', (_, res) => {
        res.send('Hello, test!');
      });

      this.areRoutesSetted = true;
    }
  }

  private startListening() {
    this.httpServer = this.app.listen(this.port);
  }

  private stopListening() {
    if (this.httpServer && this.httpServer.listening) {
      this.httpServer.close();
      return true;
    }

    return false;
  }
}

export default ExpressServer;
export * from './types';
