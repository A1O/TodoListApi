import ExpressApp from '#Express';

class TodoListApi {
  expressApp: ExpressApp;

  constructor() {
    this.expressApp = new ExpressApp();
  }

  start() {
    this.expressApp.start();
  }
}

export default TodoListApi;
