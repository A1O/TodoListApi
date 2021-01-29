import { ApolloServer } from 'apollo-server-express';
import { IExpressServer } from '#ExpressServer/types';
import typeDefs from './schema';
import resolvers from './Resolvers';
import { IGraphQLServer } from './types';

class GraphQLServer extends ApolloServer implements IGraphQLServer {
  constructor() {
    super({
      playground: true,
      debug: true,
      context: (test) => {
        // console.log('Context', test);
      },
      typeDefs,
      resolvers,
    });
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
