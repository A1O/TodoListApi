import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import type { ITaskService } from '#Services/types';
import Task from '#Entities/Task';
import type { IContext } from '#GraphQL/types';

@injectable()
@Resolver()
class AuthMutations {
  @inject(DependencyTypes.ITaskService)
  _taskService!: ITaskService;

  @Authorized()
  @Mutation(() => Task, { nullable: true })
  async createTask(
    @Arg('title') title: string,
    @Arg('description') description: string,
    @Ctx() { user }: IContext
  ): Promise<Task> {
    return this._taskService.createTask({ title, description }, user);
  }
}

export default AuthMutations;
