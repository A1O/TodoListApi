import ExpressServer from '#ExpressServer';

class UserService {
  expressServer: ExpressServer;

  constructor(expressServer: ExpressServer) {
    this.expressServer = expressServer;
  }
}

export default UserService;
