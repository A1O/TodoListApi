import { ApolloServer } from 'apollo-server-express';
import { IExpressServer } from '#Express/types';
import User from '#Entities/User';

export interface IGraphQLServer extends ApolloServer {
  setExpressServer: (expressServer: IExpressServer) => void;
}
export interface IContext {
  user: User;
}
