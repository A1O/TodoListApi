import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import UserService from './UserService';

class Services {
  userService: UserService;

  constructor(sqlDatabase: SqlDatabase) {
    this.userService = new UserService(sqlDatabase);
  }

  loadServicesOnExpress(expressServer: ExpressServer) {
    const userServiceRouter = this.userService.prepareExpressRouter();

    expressServer.use('/user', userServiceRouter);
  }
}

export default Services;
