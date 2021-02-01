import { ApolloServer } from 'apollo-server-express';
import { IExpressServer } from '#Express/types';
import { ITaskService, IAuthService } from '#Services/types';
import { IRabbitMQClient } from '#FakeRabbitMQ/types';

export interface IGraphQLServer extends ApolloServer {
  setExpressServer: (expressServer: IExpressServer) => void;
}

export interface IDependencies {
  rabbitMQClient: IRabbitMQClient;
  authService: IAuthService;
  taskService: ITaskService;
}

export interface IContext extends IDependencies {
  userId: string | null;
}
