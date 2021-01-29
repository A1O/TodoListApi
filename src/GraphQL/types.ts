import { ApolloServer } from 'apollo-server-express';
import { IExpressServer } from '#ExpressServer/types';

export interface IGraphQLServer extends ApolloServer {
  setExpressServer: (expressServer: IExpressServer) => void;
}
