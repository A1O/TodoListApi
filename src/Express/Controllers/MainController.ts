import express from 'express';
import { controller, interfaces, response, httpGet } from 'inversify-express-utils';

@controller('/')
export class MainController implements interfaces.Controller {
  @httpGet('/')
  // eslint-disable-next-line class-methods-use-this
  private async main(@response() res: express.Response) {
    return res.send('Hello, this is TodoListApi!');
  }
}
