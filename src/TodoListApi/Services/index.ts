import ExpressServer from '#ExpressServer';
import UserService from './UserService';

class Services {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  loadServicesOnExpress(expressServer: ExpressServer) {
    const userServiceRouter = this.userService.prepareExpressRouter();

    expressServer.use('/auth', userServiceRouter);
  }
}

export default Services;
