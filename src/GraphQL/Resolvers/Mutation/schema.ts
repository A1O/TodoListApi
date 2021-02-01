import { gql } from 'apollo-server-express';

export default gql`
  type Mutation {
    register(username: String!, password: String!): User!
    login(username: String!, password: String!): String!
    createTask(title: String!, description: String): Task!
  }
`;
