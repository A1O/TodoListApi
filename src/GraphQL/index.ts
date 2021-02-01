import { ApolloServer } from 'apollo-server-express';
import { Container } from 'inversify';
import { IExpressServer } from '#Express/types';
import typeDefs from './schema';
import resolvers from './Resolvers';
import { IDependencies, IGraphQLServer } from './types';
import { DependencyTypes } from '#Container/types';
import { ITaskService, IAuthService } from '#Services/types';
import { IRabbitMQClient } from '#FakeRabbitMQ/types';

class GraphQLServer extends ApolloServer implements IGraphQLServer {
  private dependencies: IDependencies;

  constructor(container: Container, rabbitMQClient: IRabbitMQClient) {
    super({
      playground: true,
      debug: true,
      context: async ({ req, connection }) => {
        const token = connection ? connection.context.Authorization : req.headers.authorization;
        const userId = token ? await this.dependencies.authService.getUserIdByToken(token) : null;

        return { ...this.dependencies, userId };
      },
      typeDefs,
      resolvers,
    });

    this.dependencies = {
      rabbitMQClient,
      authService: container.get<IAuthService>(DependencyTypes.IAuthService),
      taskService: container.get<ITaskService>(DependencyTypes.ITaskService),
    };
  }

  public setExpressServer({ app }: IExpressServer) {
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
