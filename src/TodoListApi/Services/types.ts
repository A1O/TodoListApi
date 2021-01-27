import { IUserService } from './UserService/types';

export interface IServices {
  _userService: IUserService;

  loadServicesOnExpress: () => void;
}
