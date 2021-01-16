import express from 'express';

class ExpressApp {
  app: express.Application;
  port: string;

  constructor() {
    this.app = express();
    this.port = <string>process.env.PORT;
  }

  start() {
    this.loadRoutes();
    this.startListening();
  }

  private loadRoutes() {
    this.app.get('/', (_, res) => {
      res.send('Hello, world!');
    });

    this.app.get('/test', (_, res) => {
      res.send('Hello, test!');
    });
  }

  private startListening() {
    this.app.listen(this.port);
    console.log(`Express app is listening on ${this.port}...`);
  }
}

export default ExpressApp;
