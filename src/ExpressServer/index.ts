import bodyParser from 'body-parser';
import express from 'express';
import { Server } from 'http';
import { IRunnable } from '#types';
import { ExpressGetMethod, ExpressMethod, ExpressUse } from './types';

class ExpressServer implements IRunnable {
  private app: express.Application;
  private httpServer?: Server;
  port: number;

  get: ExpressGetMethod;
  post: ExpressMethod;
  put: ExpressMethod;
  delete: ExpressMethod;
  use: ExpressUse;

  constructor(port?: number) {
    this.port = port || 3000;
    this.app = express();
    this.setParsers();

    this.get = this.app.get.bind(this.app);
    this.post = this.app.post.bind(this.app);
    this.put = this.app.put.bind(this.app);
    this.delete = this.app.delete.bind(this.app);
    this.use = this.app.use.bind(this.app);
  }

  start() {
    this.startListening();
    console.debug(`Express is started and listening on ${this.port}...`);
  }

  stop() {
    if (this.stopListening()) {
      console.debug(`Express app was stopped...`);
    }
  }

  private setParsers() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
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
