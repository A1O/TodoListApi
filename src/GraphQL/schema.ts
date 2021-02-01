import { gql } from 'apollo-server';

export default gql`
  scalar DateTime

  type Query {
    getUserTasks: [Task]!
  }

  type Mutation {
    register(username: String!, password: String!): User!
    login(username: String!, password: String!): String!
    createTask(title: String!, description: String): Task!
  }

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
