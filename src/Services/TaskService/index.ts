/* eslint-disable class-methods-use-this */
import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import type { IUserRepository } from '#SqlDatabase/types';
import type { ITaskInput, ITaskService } from './types';
import type User from '#Entities/User';

@injectable()
class TaskService implements ITaskService {
  @inject(DependencyTypes.IUserRepository)
  private _userRepository!: IUserRepository;

  async createTask({ title, description }: ITaskInput, user: User) {
    return user.createTask({ title, description });
  }

  async getUserTasks(user: User) {
    return user.getTasks();
  }
}

export default TaskService;
