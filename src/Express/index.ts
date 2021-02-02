import httpContext from 'express-http-context';
import bodyParser from 'body-parser';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import type { Server } from 'http';
import type { Container } from 'inversify';
import type { IExpressServer } from './types';
import './Controllers';

class ExpressServer extends InversifyExpressServer implements IExpressServer {
  private httpServer?: Server;
  app: express.Application;
  port: number;

  constructor(container: Container) {
    super(container);
    this.port = parseInt(<string>process.env.PORT, 10);
    this.setExpressUsings();
    this.app = this.build();
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

  private setExpressUsings() {
    this.setConfig((app) => {
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      app.use(httpContext.middleware);
    });
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
