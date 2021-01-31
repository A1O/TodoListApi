import { gql } from 'apollo-server';

export default gql`
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
    createdAt: String!
    updatedAt: String!
  }

  type Task {
    id: String!
    title: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }
`;
