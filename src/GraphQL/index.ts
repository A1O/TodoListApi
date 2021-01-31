import { ApolloServer } from 'apollo-server-express';
import { Container } from 'inversify';
import { IExpressServer } from '#ExpressServer/types';
import typeDefs from './schema';
import resolvers from './Resolvers';
import { IDependencies, IGraphQLServer } from './types';
import { DependencyTypes } from '#Container/types';
import { ITaskService, IUserService } from '#Services/types';
import { IRabbitMQClient } from '#FakeRabbitMQClient/types';

class GraphQLServer extends ApolloServer implements IGraphQLServer {
  private dependencies: IDependencies;

  constructor(container: Container, rabbitMQClient: IRabbitMQClient) {
    super({
      playground: true,
      debug: true,
      context: () => {
        return this.dependencies;
      },
      typeDefs,
      resolvers: resolvers as any,
    });

    this.dependencies = {
      rabbitMQClient,
      userService: container.get<IUserService>(DependencyTypes.IUserService),
      taskService: container.get<ITaskService>(DependencyTypes.ITaskService),
    };
  }
  setExpressServer({ app }: IExpressServer) {
    this.applyMiddleware({
      app,
      bodyParserConfig: {
        limit: '50mb',
      },
    });
    console.log('GraphQL server loaded...');
  }
}

export default GraphQLServer;
