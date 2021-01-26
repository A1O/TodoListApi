import { inject, injectable } from 'inversify';
import { IExpressServer } from '#ExpressServer/types';
import { DependencyTypes } from '#Container/types';
import { IUserService } from './UserService/types';
import { IServices } from './types';

@injectable()
class Services implements IServices {
  @inject(DependencyTypes.IUserService)
  _userService!: IUserService;

  loadServicesOnExpress(expressServer: IExpressServer) {
    const userServiceRouter = this._userService.prepareExpressRouter();

    expressServer.use('/user', userServiceRouter);
    console.log('Services is mounted on Express server...');
  }
}

export default Services;
