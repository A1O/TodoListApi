import { inject, injectable } from 'inversify';
import { Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { DependencyTypes } from '#Container/types';
import Task from '#Entities/Task';
import { ITaskService } from '#Services/types';
import { IContext } from '#GraphQL/types';

@injectable()
@Resolver()
class TaskQueries {
  @inject(DependencyTypes.ITaskService)
  private readonly _taskService!: ITaskService;

  @Authorized()
  @Query(() => [Task], { nullable: true })
  async userTasks(@Ctx() { user }: IContext): Promise<Task[]> {
    return this._taskService.getUserTasks(user);
  }
}

export default TaskQueries;
