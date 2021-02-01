import { IContext } from '#GraphQL/types';
import { ITaskVariables } from './types';

export default {
  createTask: async (_: void, { title, description }: ITaskVariables, { rabbitMQClient, userId }: IContext) =>
    rabbitMQClient.publishWithReply('createTask', { title, description, userId }),
};
