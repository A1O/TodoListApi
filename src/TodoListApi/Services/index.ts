import ExpressServer from '#ExpressServer';
import AuthService from './AuthService';

class Services {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  loadServicesOnExpress(expressServer: ExpressServer) {
    const authServiceRouter = this.authService.prepareExpressRouter();

    expressServer.use('/auth', authServiceRouter);
  }
}

export default Services;
