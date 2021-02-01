import { IResolvers } from 'apollo-server-express';
import { AuthMutations, TaskMutations } from './Mutation';
import { TaskQueries } from './Query';

const Resolvers: IResolvers = {
  Query: {
    ...TaskQueries,
  },
  Mutation: {
    ...AuthMutations,
    ...TaskMutations,
  },
};

export default Resolvers;
