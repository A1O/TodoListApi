import { IExpressServer } from '#ExpressServer/types';
import SqlDatabase from '#SqlDatabase';
import UserService from './UserService';

class Services {
  userService: UserService;

  constructor(sqlDatabase: SqlDatabase) {
    this.userService = new UserService(sqlDatabase);
  }

  loadServicesOnExpress(expressServer: IExpressServer) {
    const userServiceRouter = this.userService.prepareExpressRouter();

    expressServer.use('/user', userServiceRouter);
  }
}

export default Services;
