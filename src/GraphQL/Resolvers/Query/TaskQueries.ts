import { IContext } from '#GraphQL/types';

export default {
  getUserTasks: (_: void, __: void, { taskService, userId }: IContext) => taskService.getUserTasks(userId),
};
