import { AuthMutations, TaskMutations } from './Mutation';
import { TaskQueries } from './Query';

export default {
  Query: {
    ...TaskQueries,
  },
  Mutation: {
    ...AuthMutations,
    ...TaskMutations,
  },
};
