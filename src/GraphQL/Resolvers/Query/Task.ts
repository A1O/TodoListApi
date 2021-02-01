import { IContext } from '#GraphQL/types';

export default {
  getUserTasks: (_: never, __: never, { taskService, userId }: IContext) => taskService.getUserTasks(userId),
};
