import type { ApolloServer } from 'apollo-server-express';
import type { IExpressServer } from '#Express/types';
import type User from '#Entities/User';

export interface IGraphQLServer extends ApolloServer {
  setExpressServer: (expressServer: IExpressServer) => void;
}
export interface IContext {
  user: User;
}
