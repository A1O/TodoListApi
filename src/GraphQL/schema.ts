import { gql } from 'apollo-server-express';
import scalarsTypeDefs from './Scalars/schema';
import queriesTypeDefs from './Resolvers/Query/schema';
import mutationsTypeDefs from './Resolvers/Mutation/schema';

const types = gql`
  type User {
    id: String!
    username: String!
    password: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Task {
    id: String!
    title: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;

export default [scalarsTypeDefs, queriesTypeDefs, mutationsTypeDefs, types];
