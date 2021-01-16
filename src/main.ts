import express from 'express';

class EismokyklaApi {
  nodeEnv: string;
  expressApp: express.Application;

  constructor(nodeEnv: string) {
    this.nodeEnv = nodeEnv;
    this.expressApp = express();
  }

  start() {
    this.startExpress();
    console.log(`Eismokykla API started working... (ENV: ${this.nodeEnv})`);
  }

  private startExpress() {
    this.expressApp.get('/', (_, res) => {
      res.send('Hello, world!');
    });

    this.expressApp.get('/test', (_, res) => {
      res.send('Hello, test!');
    });

    this.expressApp.listen(<string>process.env.PORT);
  }
}

export default EismokyklaApi;
