import ExpressApp from './Express';

class EismokyklaApi {
  expressApp: ExpressApp;

  constructor() {
    this.expressApp = new ExpressApp();
  }

  start() {
    this.expressApp.start();
    console.log('Eismokykla API started...');
  }
}

export default EismokyklaApi;
