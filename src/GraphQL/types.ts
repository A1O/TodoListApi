import { ApolloServer } from 'apollo-server-express';
import { IExpressServer } from '#ExpressServer/types';
import { ITaskService, IUserService } from '#Services/types';
import { IRabbitMQClient } from '#FakeRabbitMQClient/types';

export interface IGraphQLServer extends ApolloServer {
  setExpressServer: (expressServer: IExpressServer) => void;
}

export interface IDependencies {
  rabbitMQClient: IRabbitMQClient;
  userService: IUserService;
  taskService: ITaskService;
}
