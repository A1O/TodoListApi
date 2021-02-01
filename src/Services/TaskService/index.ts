import { inject, injectable } from 'inversify';
import { DependencyTypes } from '#Container/types';
import { IUserRepository } from '#SqlDatabase/types';
import { ITaskInput, ITaskService } from './types';

@injectable()
class TaskService implements ITaskService {
  @inject(DependencyTypes.IUserRepository)
  private _userRepository!: IUserRepository;

  async createTask({ title, description }: ITaskInput, userId: string | null) {
    // TODO: This check will be removed with implementing 'permissions'
    if (!userId) {
      throw new Error('You must be authenticated to peform this action');
    }
    //

    const user = await this._userRepository.getUser({ id: userId });
    if (!user) {
      throw new Error(`User not found in createTask use case (id: ${userId})`);
    }

    return user.createTask({ title, description });
  }

  async getUserTasks(userId: string | null) {
    // TODO: This check will be removed with implementing 'permissions'
    if (!userId) {
      throw new Error('You must be authenticated to peform this action');
    }
    //

    const user = await this._userRepository.getUser({ id: userId });
    if (!user) {
      throw new Error(`User not found in getUserTasks use case (id: ${userId})`);
    }

    return user.getTasks();
  }
}

export default TaskService;
