import { inject, injectable } from 'inversify';
import { IExpressServer } from '#ExpressServer/types';
import { DependencyTypes } from '#Container/types';
import { IUserService } from './UserService/types';
import { IServices } from './types';

@injectable()
class Services implements IServices {
  @inject(DependencyTypes.IUserService)
  _userService!: IUserService;
  @inject(DependencyTypes.IExpressServer)
  _expressServer!: IExpressServer;

  loadServicesOnExpress() {
    this._userService.loadExpressRoutes();
    console.log('Services is mounted on Express server...');
  }
}

export default Services;
