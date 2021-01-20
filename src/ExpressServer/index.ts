import express, { IRouterMatcher } from 'express';
import { Server } from 'http';
import { ExpressGetMethod, ExpressMethod, IRunnable } from './types';

class ExpressServer implements IRunnable {
  private app: express.Application;
  private httpServer?: Server;
  port: number;

  get: ExpressGetMethod;
  post: ExpressMethod;
  put: ExpressMethod;
  delete: ExpressMethod;

  constructor(port?: number) {
    this.app = express();
    this.port = port || 3000;
    this.get = this.app.get;
    this.post = this.app.post;
    this.put = this.app.put;
    this.delete = this.app.delete;
  }

  start() {
    this.startListening();
    console.debug(`Express app is started and listening on ${this.port}...`);
  }

  stop() {
    if (this.stopListening()) {
      console.debug(`Express app was stopped...`);
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
