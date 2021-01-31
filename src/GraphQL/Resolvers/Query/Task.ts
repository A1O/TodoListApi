import { IDependencies } from '#GraphQL/types';

export default {
  getUserTasks: (_: never, __: never, { taskService }: IDependencies) => taskService.getUserTasks(),
};
