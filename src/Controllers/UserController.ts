import express from 'express';
import { inject } from 'inversify';
import { controller, interfaces, httpPost, request, response } from 'inversify-express-utils';
import { DependencyTypes } from '#Container/types';
import { IUserService } from '#Services/types';

@controller('/user')
export class UserController implements interfaces.Controller {
  @inject(DependencyTypes.IUserService)
  private _userService!: IUserService;

  @httpPost('/login')
  private async login(@request() { body }: express.Request, @response() res: express.Response) {
    return res.send(await this._userService.login(body));
  }

  @httpPost('/register')
  private async register(@request() { body }: express.Request, @response() res: express.Response) {
    return res.send(await this._userService.register(body));
  }
}
