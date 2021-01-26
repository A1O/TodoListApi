import { IExpressServer } from '#ExpressServer/types';
import { IUserService } from './UserService/types';

export interface IServices {
  _userService: IUserService;

  loadServicesOnExpress: (expressServer: IExpressServer) => void;
}
