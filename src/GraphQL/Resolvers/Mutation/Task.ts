import { IContext } from '#GraphQL/types';
import { ITaskVariables } from './types';

export default {
  createTask: async (_: never, { title, description }: ITaskVariables, { rabbitMQClient, userId }: IContext) =>
    rabbitMQClient.publishWithReply('createTask', { title, description, userId }),
};
