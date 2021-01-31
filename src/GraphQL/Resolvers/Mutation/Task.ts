import { IDependencies } from '#GraphQL/types';
import { ITaskVariables } from './types';

export default {
  createTask: async (_: never, { title, description }: ITaskVariables, { rabbitMQClient }: IDependencies) =>
    rabbitMQClient.publishWithReply('createTask', { title, description }),
};
