import ExpressServer from '#ExpressServer';
import SqlDatabase from '#SqlDatabase';
import AuthService from './AuthService';

class Services {
  authService: AuthService;

  constructor(sqlDatabase: SqlDatabase) {
    this.authService = new AuthService(sqlDatabase);
  }

  loadServicesOnExpress(expressServer: ExpressServer) {
    const authServiceRouter = this.authService.prepareExpressRouter();

    expressServer.use('/auth', authServiceRouter);
  }
}

export default Services;
