import { IDependencies } from '#GraphQL/types';
import { IAuthVariables } from './types';

export default {
  register: (_: never, { username, password }: IAuthVariables, { rabbitMQClient }: IDependencies) =>
    rabbitMQClient.publishWithReply('register', { username, password }),
  login: (_: never, { username, password }: IAuthVariables, { rabbitMQClient }: IDependencies) =>
    rabbitMQClient.publishWithReply('login', { username, password }),
};
