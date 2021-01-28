import httpContext from 'express-http-context';
import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { IUserRepository } from '#SqlDatabase/types';
import { ITaskInput, ITaskService } from './types';

@injectable()
class TaskService implements ITaskService {
  @inject(DependencyTypes.IUserRepository)
  private _userRepository!: IUserRepository;

  async createTask({ title, description }: ITaskInput) {
    const userId = httpContext.get('userId');
    const user = await this._userRepository.getUser({ id: userId });

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.createTask({ title, description });
  }

  async getUserTasks() {
    const userId = httpContext.get('userId');
    const user = await this._userRepository.getUser({ id: userId });

    if (!user) {
      throw new Error(`User not found in task creation (id: ${userId})`);
    }

    return user.getTasks();
  }
}

export default TaskService;
