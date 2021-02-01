import { IContext } from '#GraphQL/types';
import { IAuthVariables } from './types';

export default {
  register: (_: never, { username, password }: IAuthVariables, { rabbitMQClient }: IContext) =>
    rabbitMQClient.publishWithReply('register', { username, password }),
  login: (_: never, { username, password }: IAuthVariables, { rabbitMQClient }: IContext) =>
    rabbitMQClient.publishWithReply('login', { username, password }),
};
